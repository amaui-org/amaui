import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsInputHdmiSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputHdmiSharp'
      short_name='SettingsInputHdmi'

      {...props}
    >
      <path d="M8 22V19L5 13V7H6V2H18V7H19V13L16 19V22ZM8 7H10V5H11V7H13V5H14V7H16V4H8ZM10 20H14V18.5L17 12.5V9H7V12.5L10 18.5ZM12 14.5Z"/>
    </Icon>
  )
});

export default IconMaterialSettingsInputHdmiSharp;
