import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneAndroidSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneAndroidSharpW700Filled'
      short_name='PhoneAndroid'

      {...props}
    >
      <path d="M10 19.625H14V18.625H10ZM4.225 23.775V0.225H19.775V23.775ZM7.375 15.625H16.625V6.375H7.375Z"/>
    </Icon>
  )
});

export default IconMaterialPhoneAndroidSharpW700Filled;
