import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabUnselectedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabUnselectedRoundedW100Filled'
      short_name='TabUnselected'

      {...props}
    >
      <path d="M15 18.7V18H17V18.7ZM8 6V5.3H10V6ZM13.5 10Q12.875 10 12.438 9.562Q12 9.125 12 8.5V5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V10ZM19 18.7V18H19.2Q19.575 18 19.788 17.788Q20 17.575 20 17.2V16H20.7V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM11 18.7V18H13V18.7ZM20 14V12H20.7V14ZM3.3 15V13H4V15ZM3.3 11V9H4V11ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V17H4V17.2Q4 17.5 4.25 17.75Q4.5 18 4.8 18H5V18.7ZM3.3 7V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H6V6H4.8Q4.425 6 4.213 6.213Q4 6.425 4 6.8V7ZM7 18.7V18H9V18.7Z"/>
    </Icon>
  );
});

IconMaterialTabUnselectedRoundedW100Filled.displayName = 'AmauiIconMaterialTabUnselectedRoundedW100Filled';

export default IconMaterialTabUnselectedRoundedW100Filled;
