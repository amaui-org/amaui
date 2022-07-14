import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneAndroidSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidSharpFilled'
      short_name='PhoneAndroid'

      {...props}
    >
      <path d="M10 20H14V19H10ZM5 23V1H19V23ZM7 16H17V6H7Z"/>
    </Icon>
  );
});

export default IconMaterialPhoneAndroidSharpFilled;
