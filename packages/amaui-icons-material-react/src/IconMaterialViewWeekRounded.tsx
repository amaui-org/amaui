import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewWeekRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeekRounded'
      short_name='ViewWeek'

      {...props}
    >
      <path d="M4 18H8Q8 18 8 18Q8 18 8 18V6Q8 6 8 6Q8 6 8 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM10 18H14Q14 18 14 18Q14 18 14 18V6Q14 6 14 6Q14 6 14 6H10Q10 6 10 6Q10 6 10 6V18Q10 18 10 18Q10 18 10 18ZM16 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H16Q16 6 16 6Q16 6 16 6V18Q16 18 16 18Q16 18 16 18ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialViewWeekRounded.displayName = 'AmauiIconMaterialViewWeekRounded';

export default IconMaterialViewWeekRounded;
