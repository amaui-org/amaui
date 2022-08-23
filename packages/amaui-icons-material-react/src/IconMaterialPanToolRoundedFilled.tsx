import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPanToolRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolRoundedFilled'
      short_name='PanTool'

      {...props}
    >
      <path d="M11.7 24Q10.825 24 10.125 23.688Q9.425 23.375 8.85 22.8L2.075 15.9Q1.625 15.425 1.638 14.812Q1.65 14.2 2.1 13.775Q2.45 13.45 2.95 13.375Q3.45 13.3 3.875 13.55L8 15.9V4.5Q8 3.9 8.45 3.45Q8.9 3 9.5 3Q10.1 3 10.55 3.45Q11 3.9 11 4.5V10.5Q11 10.7 11.15 10.85Q11.3 11 11.5 11Q11.7 11 11.85 10.85Q12 10.7 12 10.5V1.5Q12 0.9 12.45 0.45Q12.9 0 13.5 0Q14.1 0 14.55 0.45Q15 0.9 15 1.5V10.5Q15 10.7 15.15 10.85Q15.3 11 15.5 11Q15.7 11 15.85 10.85Q16 10.7 16 10.5V2.5Q16 1.9 16.45 1.45Q16.9 1 17.5 1Q18.1 1 18.55 1.45Q19 1.9 19 2.5V10.5Q19 10.7 19.15 10.85Q19.3 11 19.5 11Q19.7 11 19.85 10.85Q20 10.7 20 10.5V5.5Q20 4.9 20.45 4.45Q20.9 4 21.5 4Q22.1 4 22.55 4.45Q23 4.9 23 5.5V20Q23 21.65 21.825 22.825Q20.65 24 19 24Z"/>
    </Icon>
  );
});

IconMaterialPanToolRoundedFilled.displayName = 'AmauiIconMaterialPanToolRoundedFilled';

export default IconMaterialPanToolRoundedFilled;
