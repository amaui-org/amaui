import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAreaChartRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChartRoundedW100Filled'
      short_name='AreaChart'

      {...props}
    >
      <path d="M19.7 16.625 13.075 11.45Q12.575 11.05 11.95 11.137Q11.325 11.225 10.95 11.75L7.875 16L5.25 13.925Q5 13.725 4.775 13.637Q4.55 13.55 4.3 13.525V9.75Q4.4 9.75 4.513 9.8Q4.625 9.85 4.75 9.95L7.3 11.85L11.8 5.525Q12 5.25 12.312 5.213Q12.625 5.175 12.875 5.375L16.55 8.3H18.95Q19.275 8.3 19.488 8.512Q19.7 8.725 19.7 9.05ZM5.05 18.7Q4.725 18.7 4.513 18.487Q4.3 18.275 4.3 17.95V14.225Q4.425 14.225 4.537 14.262Q4.65 14.3 4.775 14.4L8 17L11.55 12.125Q11.75 11.85 12.05 11.812Q12.35 11.775 12.6 11.975L19.7 17.5V17.95Q19.7 18.275 19.488 18.487Q19.275 18.7 18.95 18.7Z"/>
    </Icon>
  );
});

IconMaterialAreaChartRoundedW100Filled.displayName = 'AmauiIconMaterialAreaChartRoundedW100Filled';

export default IconMaterialAreaChartRoundedW100Filled;
