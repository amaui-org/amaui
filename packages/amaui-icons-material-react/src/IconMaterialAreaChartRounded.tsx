import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAreaChartRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChartRounded'
      short_name='AreaChart'

      {...props}
    >
      <path d="M4 20Q3.575 20 3.288 19.712Q3 19.425 3 19V7.25Q3.125 7.25 3.288 7.287Q3.45 7.325 3.6 7.45L7 10L11.375 3.85Q11.625 3.5 12.05 3.438Q12.475 3.375 12.825 3.65L17 7H20Q20.425 7 20.712 7.287Q21 7.575 21 8V19Q21 19.425 20.712 19.712Q20.425 20 20 20ZM8 17 11.4 12.325Q11.65 11.975 12.062 11.912Q12.475 11.85 12.825 12.125L19 16.95V9H16.3L12.4 5.875Q12.4 5.875 12.4 5.875Q12.4 5.875 12.4 5.875L7.45 12.825L5 11Q5 11 5 11Q5 11 5 11V14.6Q5 14.6 5 14.6Q5 14.6 5 14.6Z"/>
    </Icon>
  );
});

IconMaterialAreaChartRounded.displayName = 'AmauiIconMaterialAreaChartRounded';

export default IconMaterialAreaChartRounded;
