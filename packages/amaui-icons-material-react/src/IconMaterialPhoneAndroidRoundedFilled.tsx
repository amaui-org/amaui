import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneAndroidRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidRoundedFilled'
      short_name='PhoneAndroid'

      {...props}
    >
      <path d="M10.5 20H13.5Q13.7 20 13.85 19.85Q14 19.7 14 19.5Q14 19.3 13.85 19.15Q13.7 19 13.5 19H10.5Q10.3 19 10.15 19.15Q10 19.3 10 19.5Q10 19.7 10.15 19.85Q10.3 20 10.5 20ZM7 23Q6.175 23 5.588 22.413Q5 21.825 5 21V3Q5 2.175 5.588 1.587Q6.175 1 7 1H17Q17.825 1 18.413 1.587Q19 2.175 19 3V21Q19 21.825 18.413 22.413Q17.825 23 17 23ZM7 16H17V6H7Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroidRoundedFilled.displayName = 'AmauiIconMaterialPhoneAndroidRoundedFilled';

export default IconMaterialPhoneAndroidRoundedFilled;
