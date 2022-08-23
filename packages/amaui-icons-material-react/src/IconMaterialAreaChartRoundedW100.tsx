import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAreaChartRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChartRoundedW100'
      short_name='AreaChart'

      {...props}
    >
      <path d="M5.05 18.7Q4.725 18.7 4.513 18.487Q4.3 18.275 4.3 17.95V9.75Q4.4 9.75 4.513 9.8Q4.625 9.85 4.75 9.95L7.3 11.85L11.8 5.525Q12 5.25 12.312 5.213Q12.625 5.175 12.875 5.375L16.55 8.3H18.95Q19.275 8.3 19.488 8.512Q19.7 8.725 19.7 9.05V17.95Q19.7 18.275 19.488 18.487Q19.275 18.7 18.95 18.7ZM8 17 11.55 12.125Q11.75 11.85 12.05 11.812Q12.35 11.775 12.6 11.975L19 16.95V9H16.3L12.4 5.875Q12.4 5.875 12.4 5.875Q12.4 5.875 12.4 5.875L7.45 12.825L5 11Q5 11 5 11Q5 11 5 11V14.6Q5 14.6 5 14.6Q5 14.6 5 14.6Z"/>
    </Icon>
  );
});

IconMaterialAreaChartRoundedW100.displayName = 'AmauiIconMaterialAreaChartRoundedW100';

export default IconMaterialAreaChartRoundedW100;
