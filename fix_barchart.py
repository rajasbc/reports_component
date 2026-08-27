import re

path = r'C:\Users\Shiva\git clone\reports_component\src\components\BarChart_neon\BarChart_neon.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix paddingOffset to 0
content = re.sub(r'const paddingOffset = isResponsive \? \(title \? 48 : 0\) : 0;', 'const paddingOffset = 0;', content)

# Fix rotatedLabelHeight factor from 1.2 to 0.7
content = re.sub(r'const rotatedLabelHeight = needsRotation \? maxLabelLen \* estCharWidth \* 1\.2 : 20;', 'const rotatedLabelHeight = needsRotation ? maxLabelLen * estCharWidth * 0.7 : 20;', content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("BarChart_neon updated.")
