import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhonelinkOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkOffRoundedFilled'
      short_name='PhonelinkOff'

      {...props}
    >
      <path d="M8.85 6 6.85 4H20Q20.425 4 20.712 4.287Q21 4.575 21 5Q21 5.425 20.712 5.713Q20.425 6 20 6ZM22 19.15 20 17.15V10H16V13.15L14 11.15V9Q14 8.575 14.288 8.287Q14.575 8 15 8H21Q21.425 8 21.712 8.287Q22 8.575 22 9ZM17.15 20H15Q14.575 20 14.288 19.712Q14 19.425 14 19V16.8L6 8.8V17H10.5Q11.125 17 11.562 17.438Q12 17.875 12 18.5Q12 19.125 11.562 19.562Q11.125 20 10.5 20H3.5Q2.875 20 2.438 19.562Q2 19.125 2 18.5Q2 17.875 2.438 17.438Q2.875 17 3.5 17H4V6.8L2.1 4.9Q1.95 4.75 1.888 4.575Q1.825 4.4 1.825 4.2Q1.825 4 1.888 3.825Q1.95 3.65 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.65 20.65 20.725 20.825Q20.8 21 20.8 21.188Q20.8 21.375 20.725 21.562Q20.65 21.75 20.5 21.9Q20.225 22.175 19.812 22.188Q19.4 22.2 19.1 21.925Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkOffRoundedFilled.displayName = 'AmauiIconMaterialPhonelinkOffRoundedFilled';

export default IconMaterialPhonelinkOffRoundedFilled;
