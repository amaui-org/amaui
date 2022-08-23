import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewWeekRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeekRoundedW100'
      short_name='ViewWeek'

      {...props}
    >
      <path d="M4.8 18H8.875Q8.875 18 8.875 18Q8.875 18 8.875 18V6Q8.875 6 8.875 6Q8.875 6 8.875 6H4.8Q4.45 6 4.225 6.225Q4 6.45 4 6.8V17.2Q4 17.55 4.225 17.775Q4.45 18 4.8 18ZM9.575 18H14.425Q14.425 18 14.425 18Q14.425 18 14.425 18V6Q14.425 6 14.425 6Q14.425 6 14.425 6H9.575Q9.575 6 9.575 6Q9.575 6 9.575 6V18Q9.575 18 9.575 18Q9.575 18 9.575 18ZM15.125 18H19.2Q19.55 18 19.775 17.775Q20 17.55 20 17.2V6.8Q20 6.45 19.775 6.225Q19.55 6 19.2 6H15.125Q15.125 6 15.125 6Q15.125 6 15.125 6V18Q15.125 18 15.125 18Q15.125 18 15.125 18ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialViewWeekRoundedW100.displayName = 'AmauiIconMaterialViewWeekRoundedW100';

export default IconMaterialViewWeekRoundedW100;
