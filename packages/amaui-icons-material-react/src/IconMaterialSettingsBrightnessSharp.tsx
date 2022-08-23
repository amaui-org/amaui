import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsBrightnessSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBrightnessSharp'
      short_name='SettingsBrightness'

      {...props}
    >
      <path d="M12 17.5 13.5 16H16V13.5L17.5 12L16 10.5V8H13.5L12 6.5L10.5 8H8V10.5L6.5 12L8 13.5V16H10.5ZM12 15V9Q13.25 9 14.125 9.875Q15 10.75 15 12Q15 13.25 14.125 14.125Q13.25 15 12 15ZM2 20V4H22V20ZM4 18V6ZM4 18H20V6H4Z"/>
    </Icon>
  );
});

IconMaterialSettingsBrightnessSharp.displayName = 'AmauiIconMaterialSettingsBrightnessSharp';

export default IconMaterialSettingsBrightnessSharp;
