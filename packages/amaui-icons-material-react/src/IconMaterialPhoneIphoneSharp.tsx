import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneIphoneSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneIphoneSharp'
      short_name='PhoneIphone'

      {...props}
    >
      <path d="M12 20.5Q12.425 20.5 12.713 20.212Q13 19.925 13 19.5Q13 19.075 12.713 18.788Q12.425 18.5 12 18.5Q11.575 18.5 11.288 18.788Q11 19.075 11 19.5Q11 19.925 11.288 20.212Q11.575 20.5 12 20.5ZM5 23V1H19V23ZM7 16H17V6H7ZM7 21H17V18H7ZM7 4H17V3H7ZM7 4V3V4ZM7 21V18V21Z"/>
    </Icon>
  );
});

IconMaterialPhoneIphoneSharp.displayName = 'AmauiIconMaterialPhoneIphoneSharp';

export default IconMaterialPhoneIphoneSharp;
