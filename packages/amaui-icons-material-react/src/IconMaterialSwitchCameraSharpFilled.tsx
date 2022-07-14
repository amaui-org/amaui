import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSwitchCameraSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchCameraSharpFilled'
      short_name='SwitchCamera'

      {...props}
    >
      <path d="M9 17 10.4 15.6 8.85 14.05H15.15L13.6 15.6L15 17L19 13L15 9L13.6 10.4L15.2 12.05H8.8L10.4 10.4L9 9L5 13ZM2 21V5H7.15L9 3H15L16.85 5H22V21Z"/>
    </Icon>
  );
});

export default IconMaterialSwitchCameraSharpFilled;
