import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputHdmi = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputHdmi'

      short_name='SettingsInputHdmi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22v-3l-3-6V7h1V2h12v5h1v6l-3 6v3ZM8 7h2V5h1v2h2V5h1v2h2V4H8Zm2 13h4v-1.5l3-6V9H7v3.5l3 6Zm2-5.5Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputHdmi.displayName = 'AmauiIconMaterialSettingsInputHdmi';

export default IconMaterialSettingsInputHdmi;
