import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCalendarAddOnSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarAddOnSharpFilled'
      short_name='CalendarAddOn'

      {...props}
    >
      <path d="M12.075 19H5Q4.175 19 3.587 18.413Q3 17.825 3 17V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2H8V4H14V2H16V4H17Q17.825 4 18.413 4.588Q19 5.175 19 6V12.075Q18.75 12.025 18.513 12.012Q18.275 12 18 12Q17.725 12 17.488 12.012Q17.25 12.025 17 12.075V9H5V17Q5 17 5 17Q5 17 5 17H12.075Q12.025 17.25 12.012 17.488Q12 17.725 12 18Q12 18.275 12.012 18.512Q12.025 18.75 12.075 19ZM17 22V19H14V17H17V14H19V17H22V19H19V22Z"/>
    </Icon>
  );
});

IconMaterialCalendarAddOnSharpFilled.displayName = 'AmauiIconMaterialCalendarAddOnSharpFilled';

export default IconMaterialCalendarAddOnSharpFilled;
