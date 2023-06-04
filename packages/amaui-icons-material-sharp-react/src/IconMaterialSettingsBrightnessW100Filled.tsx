import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsBrightnessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBrightnessW100Filled'

      short_name='SettingsBrightness'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15.65.95-.95h1.75v-1.75l.95-.95-.95-.95V9.3h-1.75L12 8.35l-.95.95H9.3v1.75l-.95.95.95.95v1.75h1.75Zm0-1.3v-4.7q.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialSettingsBrightnessW100Filled.displayName = 'AmauiIconMaterialSettingsBrightnessW100Filled';

export default IconMaterialSettingsBrightnessW100Filled;
