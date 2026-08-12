import os
import re

components_dir = 'src/components'
neon_components = [
    'AreaTrend_neon',
    'BarChart_neon',
    'DonutChart_neon',
    'GlowingAreaChart_neon',
    'GroupedBars_neon',
    'LineChart_neon',
    'MultiChart_neon',
    'PieChart_neon',
    'PolarDebtChart_neon'
]

for comp in neon_components:
    filepath = os.path.join(components_dir, comp, f'{comp}.tsx')
    if not os.path.exists(filepath):
        print(f'Skipping {comp}')
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add props to interface
    if 'totalAmount?: number | null;' not in content:
        content = re.sub(
            r'(export interface \w+Props \{[\s\S]*?className\?: string;\n)',
            r'\1  totalAmount?: number | null;\n  onHeadingClick?: () => void;\n',
            content
        )

    # Add props to destructuring
    if 'totalAmount,' not in content:
        content = re.sub(
            r'(const \w+: React\.FC<\w+Props> = \(\{\n)',
            r'\1  totalAmount,\n  onHeadingClick,\n',
            content
        )

    # Remove ECharts title
    content = re.sub(
        r'title: title \? \{[\s\S]*?\} : undefined,',
        r'title: undefined,',
        content
    )

    # Modify return statement to inject header
    # We look for <div className={`chart-container
    if '<div \n        className="flex flex-col items-start justify-center' not in content:
        header_html = '''
      {(title || (totalAmount !== undefined && totalAmount !== null)) && (
        <div 
          className="flex flex-col items-start justify-center px-4 pt-3 pb-1 z-10 transition-colors duration-200 cursor-pointer group w-full absolute top-0 left-0 bg-transparent"
          style={{ height: '60px' }}
          onClick={onHeadingClick}
        >
          {title && <h3 className="text-[14px] font-bold text-[rgba(255,255,255,0.9)] group-hover:text-[#00f3ff] transition-colors m-0 font-['Inter',sans-serif]" style={{ textShadow: '0 0 10px rgba(0, 243, 255, 0.5)' }}>{title}</h3>}
          {totalAmount !== undefined && totalAmount !== null && (
            <div className="text-[22px] font-bold text-white mt-0 group-hover:text-[#00f3ff] transition-colors" style={{ textShadow: '0 0 10px rgba(0, 243, 255, 0.5)' }}>{totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
          )}
        </div>
      )}'''
        
        content = content.replace(
            '<div className={`chart-container ${className || \'\'}`}',
            '<div className={`chart-container flex flex-col ${className || \'\'}`}'
        )
        content = content.replace(
            '<ReactECharts \n        option={option}',
            header_html + '\n      <div className="flex-1 w-full min-h-0" style={{ marginTop: (title || totalAmount !== undefined) ? "60px" : "0px" }}>\n        <ReactECharts \n          option={option}'
        )
        content = content.replace(
            'opts={{ renderer: \'canvas\' }} \n      />\n    </div>',
            'opts={{ renderer: \'canvas\' }} \n        />\n      </div>\n    </div>'
        )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print('Done')
