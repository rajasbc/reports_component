import glob

files = glob.glob('src/components/**/*_neon.tsx', recursive=True)

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    changed = False

    if 'group-hover' in content or 'onClick={onHeadingClick}' in content:
        if 'useState' not in content:
            if "import React from 'react';" in content:
                content = content.replace("import React from 'react';", "import React, { useState } from 'react';")
            elif 'import React, { ' in content:
                # Already has some imports, maybe we can just insert useState
                content = content.replace("import React, { ", "import React, { useState, ")
            elif 'import React ' in content:
                content = content.replace("import React ", "import React, { useState } ")

        if 'const [isHovered, setIsHovered]' not in content:
            # Let's insert it right after the component declaration
            # we look for '=> {' after the component props
            parts = content.split('}) => {')
            if len(parts) == 2:
                content = parts[0] + '}) => {\n  const [isHovered, setIsHovered] = useState(false);' + parts[1]
            else:
                parts = content.split('} = props;')
                if len(parts) == 2:
                    content = parts[0] + '} = props;\n  const [isHovered, setIsHovered] = useState(false);' + parts[1]

        if 'onMouseEnter={() => setIsHovered(true)}' not in content:
            content = content.replace('onClick={onHeadingClick}', 'onClick={onHeadingClick}\n          onMouseEnter={() => setIsHovered(true)}\n          onMouseLeave={() => setIsHovered(false)}')

        if 'group-hover:text-[#00f3ff]' in content:
            content = content.replace('group-hover:text-[#00f3ff] ', '')
            content = content.replace('group-hover:text-[#00f3ff]', '')
            
            content = content.replace("style={{ textShadow: '0 0 10px rgba(0, 243, 255, 0.5)' }}>{title}", "style={{ color: isHovered ? color : 'rgba(255,255,255,0.9)', textShadow: isHovered ? `0 0 10px ${color}` : 'none' }}>{title}")
            content = content.replace("style={{ textShadow: '0 0 10px rgba(0, 243, 255, 0.5)' }}>\n              {totalAmount", "style={{ color: isHovered ? color : 'white', textShadow: isHovered ? `0 0 10px ${color}` : 'none' }}>\n              {totalAmount")
            content = content.replace("style={{ textShadow: '0 0 10px rgba(0, 243, 255, 0.5)' }}>{totalAmount", "style={{ color: isHovered ? color : 'white', textShadow: isHovered ? `0 0 10px ${color}` : 'none' }}>{totalAmount")
            content = content.replace('cursor-pointer group w-full', 'cursor-pointer w-full')
            
        changed = True

    if changed:
        print(f"Updated {filepath}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
