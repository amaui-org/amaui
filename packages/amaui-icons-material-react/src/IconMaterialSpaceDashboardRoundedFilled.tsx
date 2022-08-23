import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaceDashboardRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceDashboardRoundedFilled'
      short_name='SpaceDashboard'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H9Q9.825 3 10.413 3.587Q11 4.175 11 5V19Q11 19.825 10.413 20.413Q9.825 21 9 21ZM15 10Q14.175 10 13.588 9.412Q13 8.825 13 8V5Q13 4.175 13.588 3.587Q14.175 3 15 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V8Q21 8.825 20.413 9.412Q19.825 10 19 10ZM15 21Q14.175 21 13.588 20.413Q13 19.825 13 19V14Q13 13.175 13.588 12.587Q14.175 12 15 12H19Q19.825 12 20.413 12.587Q21 13.175 21 14V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialSpaceDashboardRoundedFilled.displayName = 'AmauiIconMaterialSpaceDashboardRoundedFilled';

export default IconMaterialSpaceDashboardRoundedFilled;
