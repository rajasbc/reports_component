import glob

files = glob.glob('src/components/**/*_neon.tsx', recursive=True)

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    changed = False

    # Fix color reference
    if "isHovered ? '#00f3ff'" in content:
        # Determine the variable name for color in this file
        color_var = 'color'
        if 'defaultColor' in content and 'BarChart_neon' in filepath or 'LineChart_neon' in filepath or 'SurfaceChart_neon' in filepath:
            color_var = 'defaultColor'
            
        content = content.replace("isHovered ? '#00f3ff'", f"isHovered ? {color_var}")
        content = content.replace("isHovered ? '0 0 10px #00f3ff'", f"isHovered ? `0 0 10px ${{{color_var}}}`")
        changed = True

    # Adjust pie and donut charts
    if 'PieChart_neon' in filepath:
        if "radius: '55%'" in content:
            content = content.replace("radius: '55%'", "radius: '40%'")
            changed = True
        if "minAngle: 10" in content:
            content = content.replace("minAngle: 10", "minAngle: 5")
            changed = True
        if "fontSize: 10" not in content and "fontSize: 11" not in content:
            content = content.replace("color: '#fff',", "color: '#fff',\n          fontSize: 11,")
            changed = True

    if 'DonutChart_neon' in filepath:
        if "radius: ['35%', '55%']" in content:
            content = content.replace("radius: ['35%', '55%']", "radius: ['20%', '40%']")
            changed = True
        if "minAngle: 10" in content:
            content = content.replace("minAngle: 10", "minAngle: 5")
            changed = True
        if "fontSize: 10" not in content and "fontSize: 11" not in content:
            content = content.replace("color: '#fff',", "color: '#fff',\n          fontSize: 11,")
            changed = True

    if changed:
        print(f"Fixed {filepath}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
