import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsOverscan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsOverscan'

      short_name='SettingsOverscan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 9h4l-2-2Zm7 5 2-2-2-2ZM7 14v-4l-2 2Zm5 3 2-2h-4ZM2 20V4h20v16Zm2-2V6Zm0 0h16V6H4Z"/>
    </Icon>
  );
});

IconMaterialSettingsOverscan.displayName = 'AmauiIconMaterialSettingsOverscan';

export default IconMaterialSettingsOverscan;
