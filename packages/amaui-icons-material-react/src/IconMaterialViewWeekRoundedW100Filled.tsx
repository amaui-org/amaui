import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewWeekRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeekRoundedW100Filled'
      short_name='ViewWeek'

      {...props}
    >
      <path d="M4.1 18.7Q3.75 18.7 3.525 18.475Q3.3 18.25 3.3 17.9V6.1Q3.3 5.75 3.525 5.525Q3.75 5.3 4.1 5.3H7.825Q8.15 5.3 8.387 5.537Q8.625 5.775 8.625 6.1V17.9Q8.625 18.225 8.387 18.462Q8.15 18.7 7.825 18.7ZM10.125 18.7Q9.8 18.7 9.562 18.462Q9.325 18.225 9.325 17.9V6.1Q9.325 5.775 9.562 5.537Q9.8 5.3 10.125 5.3H13.875Q14.2 5.3 14.438 5.537Q14.675 5.775 14.675 6.1V17.9Q14.675 18.225 14.438 18.462Q14.2 18.7 13.875 18.7ZM16.175 18.7Q15.85 18.7 15.613 18.462Q15.375 18.225 15.375 17.9V6.1Q15.375 5.775 15.613 5.537Q15.85 5.3 16.175 5.3H19.9Q20.25 5.3 20.475 5.525Q20.7 5.75 20.7 6.1V17.9Q20.7 18.25 20.475 18.475Q20.25 18.7 19.9 18.7Z"/>
    </Icon>
  );
});

IconMaterialViewWeekRoundedW100Filled.displayName = 'AmauiIconMaterialViewWeekRoundedW100Filled';

export default IconMaterialViewWeekRoundedW100Filled;
