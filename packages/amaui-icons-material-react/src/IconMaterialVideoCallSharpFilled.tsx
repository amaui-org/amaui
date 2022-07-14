import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoCallSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCallSharpFilled'
      short_name='VideoCall'

      {...props}
    >
      <path d="M9 16H11V13H14V11H11V8H9V11H6V13H9ZM2 20V4H18V10.5L22 6.5V17.5L18 13.5V20Z"/>
    </Icon>
  );
});

export default IconMaterialVideoCallSharpFilled;
