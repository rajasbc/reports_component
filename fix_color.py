import glob

files = glob.glob('src/components/**/*_neon.tsx', recursive=True)
for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'PieChart_neon' in filepath or 'DonutChart_neon' in filepath:
        continue

    changed = False
    if 'isHovered ? color :' in content:
        content = content.replace('isHovered ? color :', "isHovered ? '#00f3ff' :")
        content = content.replace('isHovered ? `0 0 10px ${color}` :', "isHovered ? '0 0 10px #00f3ff' :")
        changed = True
        
    if changed:
        print(f'Fixed color in {filepath}')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
