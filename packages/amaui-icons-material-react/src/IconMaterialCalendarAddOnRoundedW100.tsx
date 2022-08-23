import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarAddOnRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarAddOnRoundedW100'
      short_name='CalendarAddOn'

      {...props}
    >
      <path d="M12.65 18.35H5.15Q4.525 18.35 4.088 17.913Q3.65 17.475 3.65 16.85V6.15Q3.65 5.525 4.088 5.087Q4.525 4.65 5.15 4.65H6.65V2.65H7.35V4.65H14.65V2.65H15.35V4.65H16.85Q17.475 4.65 17.913 5.087Q18.35 5.525 18.35 6.15V12.65Q18.275 12.65 18.188 12.65Q18.1 12.65 18 12.65Q17.9 12.65 17.825 12.65Q17.75 12.65 17.65 12.65V8.35H4.35V16.85Q4.35 17.2 4.575 17.425Q4.8 17.65 5.15 17.65H12.65Q12.65 17.725 12.65 17.812Q12.65 17.9 12.65 18Q12.65 18.1 12.65 18.175Q12.65 18.25 12.65 18.35ZM17.65 21.35V18.35H14.65V17.65H17.65V14.65H18.35V17.65H21.35V18.35H18.35V21.35Z"/>
    </Icon>
  );
});

IconMaterialCalendarAddOnRoundedW100.displayName = 'AmauiIconMaterialCalendarAddOnRoundedW100';

export default IconMaterialCalendarAddOnRoundedW100;
