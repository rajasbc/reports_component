import os
import glob
import re

files = glob.glob('src/components/**/*_neon.tsx', recursive=True)

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    changed = False

    # 1. Add useState if not imported
    if 'useState' not in content and 'import React' in content:
        content = re.sub(r"import React(.*?);", r"import React, { useState }\1;", content, count=1)
        changed = True

    # 2. Add isHovered state
    if 'const [isHovered, setIsHovered]' not in content:
        # Find the component definition
        match = re.search(r'(const \w+_neon: React\.FC<.*?> = \(\{.*?\}) => \{', content, flags=re.DOTALL)
        if match:
            # Insert useState after the component starts
            replacement = match.group(1) + " => {\n  const [isHovered, setIsHovered] = useState(false);"
            content = content.replace(match.group(0), replacement)
            changed = True

    # 3. Add onMouseEnter / onMouseLeave to the heading wrapper
    # The wrapper is usually the first <div> inside the component that has onClick={onHeadingClick} or just contains the title
    if 'onMouseEnter={() => setIsHovered(true)}' not in content:
        content = content.replace('onClick={onHeadingClick}', 'onClick={onHeadingClick}\n          onMouseEnter={() => setIsHovered(true)}\n          onMouseLeave={() => setIsHovered(false)}')
        changed = True

    # 4. Change group-hover logic to use style
    if 'group-hover:text-[#00f3ff]' in content:
        # Replace the title h3
        content = re.sub(
            r'<h3 className="([^"]*)group-hover:text-\[#00f3ff\]([^"]*)" style={{ textShadow: \'0 0 10px rgba\(0, 243, 255, 0\.5\)\' }}>\{title\}</h3>',
            r'<h3 className="\1\2" style={{ color: isHovered ? color : \'rgba(255,255,255,0.9)\', textShadow: isHovered ? `0 0 10px ${color}` : \'none\' }}>{title}</h3>',
            content
        )
        # Replace the totalAmount div
        content = re.sub(
            r'<div className="([^"]*)group-hover:text-\[#00f3ff\]([^"]*)" style={{ textShadow: \'0 0 10px rgba\(0, 243, 255, 0\.5\)\' }}>',
            r'<div className="\1\2" style={{ color: isHovered ? color : \'white\', textShadow: isHovered ? `0 0 10px ${color}` : \'none\' }}>',
            content
        )
        
        # Remove 'group' from the wrapper class
        content = content.replace('cursor-pointer group w-full', 'cursor-pointer w-full')
        changed = True

    if changed:
        print(f"Updated {filepath}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
