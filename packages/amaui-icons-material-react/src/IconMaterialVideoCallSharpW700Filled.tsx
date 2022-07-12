import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoCallSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCallSharpW700Filled'
      short_name='VideoCall'

      {...props}
    >
      <path d="M9 15.975H11V12.975H14V10.975H11V7.975H9V10.975H6V12.975H9ZM1.15 20.85V3.15H18.85V10.5L22.85 6.5V17.5L18.85 13.5V20.85Z"/>
    </Icon>
  )
});

export default IconMaterialVideoCallSharpW700Filled;
