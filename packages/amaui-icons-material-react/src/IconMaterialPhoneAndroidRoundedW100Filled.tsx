import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneAndroidRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidRoundedW100Filled'
      short_name='PhoneAndroid'

      {...props}
    >
      <path d="M10.65 19.55H13.35Q13.5 19.55 13.6 19.45Q13.7 19.35 13.7 19.2Q13.7 19.05 13.6 18.95Q13.5 18.85 13.35 18.85H10.65Q10.5 18.85 10.4 18.95Q10.3 19.05 10.3 19.2Q10.3 19.35 10.4 19.45Q10.5 19.55 10.65 19.55ZM7.8 21.7Q7.175 21.7 6.738 21.262Q6.3 20.825 6.3 20.2V3.8Q6.3 3.175 6.738 2.737Q7.175 2.3 7.8 2.3H16.2Q16.825 2.3 17.262 2.737Q17.7 3.175 17.7 3.8V20.2Q17.7 20.825 17.262 21.262Q16.825 21.7 16.2 21.7ZM7 16.7H17V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroidRoundedW100Filled.displayName = 'AmauiIconMaterialPhoneAndroidRoundedW100Filled';

export default IconMaterialPhoneAndroidRoundedW100Filled;
