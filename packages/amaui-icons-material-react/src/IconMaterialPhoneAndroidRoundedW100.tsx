import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneAndroidRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidRoundedW100'
      short_name='PhoneAndroid'

      {...props}
    >
      <path d="M10.65 19.55H13.35Q13.5 19.55 13.6 19.45Q13.7 19.35 13.7 19.2Q13.7 19.05 13.6 18.95Q13.5 18.85 13.35 18.85H10.65Q10.5 18.85 10.4 18.95Q10.3 19.05 10.3 19.2Q10.3 19.35 10.4 19.45Q10.5 19.55 10.65 19.55ZM7.8 21.7Q7.175 21.7 6.738 21.262Q6.3 20.825 6.3 20.2V3.8Q6.3 3.175 6.738 2.737Q7.175 2.3 7.8 2.3H16.2Q16.825 2.3 17.262 2.737Q17.7 3.175 17.7 3.8V20.2Q17.7 20.825 17.262 21.262Q16.825 21.7 16.2 21.7ZM7 16.7H17V5.35H7ZM7 17.4V20.2Q7 20.55 7.225 20.775Q7.45 21 7.8 21H16.2Q16.55 21 16.775 20.775Q17 20.55 17 20.2V17.4ZM7 4.65H17V3.8Q17 3.45 16.775 3.225Q16.55 3 16.2 3H7.8Q7.45 3 7.225 3.225Q7 3.45 7 3.8ZM7 3Q7 3 7 3.225Q7 3.45 7 3.8V4.65V3.8Q7 3.45 7 3.225Q7 3 7 3ZM7 21Q7 21 7 20.775Q7 20.55 7 20.2V17.4V20.2Q7 20.55 7 20.775Q7 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneAndroidRoundedW100.displayName = 'AmauiIconMaterialPhoneAndroidRoundedW100';

export default IconMaterialPhoneAndroidRoundedW100;
