import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdCardAlertSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardAlertSharp'
      short_name='SdCardAlert'

      {...props}
    >
      <path d="M11 13H13V8H11ZM11 17H13V15H11ZM4 22V8L10 2H20V22ZM6 20H18V4H10.85L6 8.85ZM6 20H10.85H18Z"/>
    </Icon>
  );
});

export default IconMaterialSdCardAlertSharp;
