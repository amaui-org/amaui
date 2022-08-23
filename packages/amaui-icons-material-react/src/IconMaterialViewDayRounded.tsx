import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewDayRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDayRounded'
      short_name='ViewDay'

      {...props}
    >
      <path d="M3.975 20Q3.55 20 3.275 19.712Q3 19.425 3 19Q3 18.575 3.288 18.288Q3.575 18 4 18H20.025Q20.45 18 20.725 18.288Q21 18.575 21 19Q21 19.425 20.712 19.712Q20.425 20 20 20ZM3.975 6Q3.55 6 3.275 5.713Q3 5.425 3 5Q3 4.575 3.288 4.287Q3.575 4 4 4H20.025Q20.45 4 20.725 4.287Q21 4.575 21 5Q21 5.425 20.712 5.713Q20.425 6 20 6ZM5 16Q4.175 16 3.587 15.412Q3 14.825 3 14V10Q3 9.175 3.587 8.587Q4.175 8 5 8H19Q19.825 8 20.413 8.587Q21 9.175 21 10V14Q21 14.825 20.413 15.412Q19.825 16 19 16ZM5 14H19Q19 14 19 14Q19 14 19 14V10Q19 10 19 10Q19 10 19 10H5Q5 10 5 10Q5 10 5 10V14Q5 14 5 14Q5 14 5 14ZM5 10Q5 10 5 10Q5 10 5 10V14Q5 14 5 14Q5 14 5 14Q5 14 5 14Q5 14 5 14V10Q5 10 5 10Q5 10 5 10Z"/>
    </Icon>
  );
});

IconMaterialViewDayRounded.displayName = 'AmauiIconMaterialViewDayRounded';

export default IconMaterialViewDayRounded;
