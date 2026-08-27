import glob
import re

files = glob.glob(r'C:\Users\Shiva\git clone\reports_component\src\components\**\*_neon.tsx', recursive=True)

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    content = re.sub(r'const paddingOffset = isResponsive \? \(title \? 48 : 0\) : 0;', 'const paddingOffset = 0;', content)
    content = re.sub(r'const rotatedLabelHeight = needsRotation \? maxLabelLen \* estCharWidth \* 1\.2 : 20;', 'const rotatedLabelHeight = needsRotation ? maxLabelLen * estCharWidth * 0.7 : 20;', content)
    
    if content != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Fixed", path)

