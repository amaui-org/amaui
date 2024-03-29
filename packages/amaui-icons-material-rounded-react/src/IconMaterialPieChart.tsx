import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPieChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PieChart'

      short_name='PieChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 11h6.95q-.375-2.75-2.287-4.663Q15.75 4.425 13 4.05Zm-2 8.95V4.05q-3.025.375-5.012 2.637Q4 8.95 4 12t1.988 5.312Q7.975 19.575 11 19.95Zm2 0q2.75-.35 4.675-2.275Q19.6 15.75 19.95 13H13ZM12 12Zm0 10q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.887.787q1.813.788 3.175 2.151 1.363 1.362 2.15 3.175Q22 9.925 22 12q0 2.05-.788 3.875-.787 1.825-2.137 3.187-1.35 1.363-3.175 2.15Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialPieChart.displayName = 'AmauiIconMaterialPieChart';

export default IconMaterialPieChart;
