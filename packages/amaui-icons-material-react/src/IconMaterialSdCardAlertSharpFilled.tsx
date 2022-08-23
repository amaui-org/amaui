import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdCardAlertSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardAlertSharpFilled'
      short_name='SdCardAlert'

      {...props}
    >
      <path d="M11 13H13V8H11ZM11 17H13V15H11ZM4 22V8L10 2H20V22Z"/>
    </Icon>
  );
});

IconMaterialSdCardAlertSharpFilled.displayName = 'AmauiIconMaterialSdCardAlertSharpFilled';

export default IconMaterialSdCardAlertSharpFilled;
