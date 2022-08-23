import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendToMobileSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobileSharpFilled'
      short_name='SendToMobile'

      {...props}
    >
      <path d="M17 16 15.6 14.6 17.15 13H12V11H17.15L15.6 9.4L17 8L21 12ZM5 23V1H19V7H17V6H7V18H17V17H19V23Z"/>
    </Icon>
  );
});

IconMaterialSendToMobileSharpFilled.displayName = 'AmauiIconMaterialSendToMobileSharpFilled';

export default IconMaterialSendToMobileSharpFilled;
