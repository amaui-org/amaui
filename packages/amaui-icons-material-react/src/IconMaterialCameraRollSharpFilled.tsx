import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCameraRollSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRollSharpFilled'
      short_name='CameraRoll'

      {...props}
    >
      <path d="M22 20H14V22H2V3H5V1H11V3H14V5H22ZM9 17H11V15H9ZM9 10H11V8H9ZM13 17H15V15H13ZM13 10H15V8H13ZM17 17H19V15H17ZM17 10H19V8H17Z"/>
    </Icon>
  );
});

export default IconMaterialCameraRollSharpFilled;
