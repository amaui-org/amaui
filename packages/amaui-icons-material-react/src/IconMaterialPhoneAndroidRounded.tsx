import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneAndroidRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidRounded'
      short_name='PhoneAndroid'

      {...props}
    >
      <path d="M10.5 20H13.5Q13.7 20 13.85 19.85Q14 19.7 14 19.5Q14 19.3 13.85 19.15Q13.7 19 13.5 19H10.5Q10.3 19 10.15 19.15Q10 19.3 10 19.5Q10 19.7 10.15 19.85Q10.3 20 10.5 20ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 16H17V6H7ZM7 18V21Q7 21 7 21Q7 21 7 21H17Q17 21 17 21Q17 21 17 21V18ZM7 4H17V3Q17 3 17 3Q17 3 17 3H7Q7 3 7 3Q7 3 7 3ZM7 3Q7 3 7 3Q7 3 7 3V4V3Q7 3 7 3Q7 3 7 3ZM7 21Q7 21 7 21Q7 21 7 21V18V21Q7 21 7 21Q7 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroidRounded.displayName = 'AmauiIconMaterialPhoneAndroidRounded';

export default IconMaterialPhoneAndroidRounded;
