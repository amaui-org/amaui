import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendToMobileSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobileSharp'
      short_name='SendToMobile'

      {...props}
    >
      <path d="M17 16 15.6 14.6 17.15 13H12V11H17.15L15.6 9.4L17 8L21 12ZM17 20H7V21H17ZM17 4V3H7V4ZM5 23V1H19V7H17V6H7V18H17V17H19V23ZM7 3V4ZM7 21V20Z"/>
    </Icon>
  );
});

export default IconMaterialSendToMobileSharp;
