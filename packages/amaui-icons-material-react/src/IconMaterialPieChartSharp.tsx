import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPieChartSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PieChartSharp'
      short_name='PieChart'

      {...props}
    >
      <path d="M13 11H19.95Q19.575 8.25 17.663 6.337Q15.75 4.425 13 4.05ZM11 19.95V4.05Q7.975 4.425 5.988 6.687Q4 8.95 4 12Q4 15.05 5.988 17.312Q7.975 19.575 11 19.95ZM13 19.95Q15.75 19.6 17.675 17.675Q19.6 15.75 19.95 13H13ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.887 2.787Q17.7 3.575 19.062 4.938Q20.425 6.3 21.212 8.113Q22 9.925 22 12Q22 14.05 21.212 15.875Q20.425 17.7 19.075 19.062Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialPieChartSharp.displayName = 'AmauiIconMaterialPieChartSharp';

export default IconMaterialPieChartSharp;
