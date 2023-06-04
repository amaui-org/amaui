import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsBrightnessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBrightnessFilled'

      short_name='SettingsBrightness'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 17.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16h2.5Zm0-2.5V9q1.25 0 2.125.875T15 12q0 1.25-.875 2.125T12 15ZM2 20V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialSettingsBrightnessFilled.displayName = 'AmauiIconMaterialSettingsBrightnessFilled';

export default IconMaterialSettingsBrightnessFilled;
