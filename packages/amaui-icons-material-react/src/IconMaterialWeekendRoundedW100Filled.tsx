import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeekendRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendRoundedW100Filled'
      short_name='Weekend'

      {...props}
    >
      <path d="M4 18Q3.275 18 2.788 17.512Q2.3 17.025 2.3 16.3V11.55Q2.3 11.025 2.7 10.662Q3.1 10.3 3.65 10.3Q4.2 10.3 4.6 10.662Q5 11.025 5 11.55V14.65H19V11.55Q19 11.025 19.4 10.662Q19.8 10.3 20.35 10.3Q20.9 10.3 21.3 10.662Q21.7 11.025 21.7 11.55V16.3Q21.7 17.025 21.213 17.512Q20.725 18 20 18ZM5.7 13.95V11.3Q5.7 10.575 5.213 10.087Q4.725 9.6 4 9.6V8.1Q4 7.375 4.488 6.887Q4.975 6.4 5.7 6.4H18.3Q19.025 6.4 19.513 6.887Q20 7.375 20 8.1V9.6Q19.275 9.625 18.788 10.113Q18.3 10.6 18.3 11.3V13.95Z"/>
    </Icon>
  );
});

IconMaterialWeekendRoundedW100Filled.displayName = 'AmauiIconMaterialWeekendRoundedW100Filled';

export default IconMaterialWeekendRoundedW100Filled;
