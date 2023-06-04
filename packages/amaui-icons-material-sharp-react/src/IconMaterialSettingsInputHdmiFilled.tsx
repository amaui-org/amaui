import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputHdmiFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputHdmiFilled'

      short_name='SettingsInputHdmi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22v-3l-3-6V7h1V2h12v5h1v6l-3 6v3ZM8 7h2V5h1v2h2V5h1v2h2V4H8Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputHdmiFilled.displayName = 'AmauiIconMaterialSettingsInputHdmiFilled';

export default IconMaterialSettingsInputHdmiFilled;
