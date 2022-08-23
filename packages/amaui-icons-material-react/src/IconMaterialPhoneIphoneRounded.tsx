import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneIphoneRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneIphoneRounded'
      short_name='PhoneIphone'

      {...props}
    >
      <path d="M12 20.5Q12.425 20.5 12.713 20.212Q13 19.925 13 19.5Q13 19.075 12.713 18.788Q12.425 18.5 12 18.5Q11.575 18.5 11.288 18.788Q11 19.075 11 19.5Q11 19.925 11.288 20.212Q11.575 20.5 12 20.5ZM7 16H17V6H7ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 4H17V3Q17 3 17 3Q17 3 17 3H7Q7 3 7 3Q7 3 7 3ZM7 3Q7 3 7 3Q7 3 7 3V4V3Q7 3 7 3Q7 3 7 3ZM7 18V21Q7 21 7 21Q7 21 7 21H17Q17 21 17 21Q17 21 17 21V18ZM7 21Q7 21 7 21Q7 21 7 21V18V21Q7 21 7 21Q7 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneIphoneRounded.displayName = 'AmauiIconMaterialPhoneIphoneRounded';

export default IconMaterialPhoneIphoneRounded;
