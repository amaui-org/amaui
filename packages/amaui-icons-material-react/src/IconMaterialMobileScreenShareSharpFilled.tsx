import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileScreenShareSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileScreenShareSharpFilled'
      short_name='MobileScreenShare'

      {...props}
    >
      <path d="M9 15V13.5Q9 12.25 9.875 11.375Q10.75 10.5 12 10.5H13V8.5L16 11.5L13 14.5V12.5H12Q11.575 12.5 11.288 12.787Q11 13.075 11 13.5V15ZM5 23V1H19V23ZM7 18H17V6H7Z"/>
    </Icon>
  )
});

export default IconMaterialMobileScreenShareSharpFilled;
