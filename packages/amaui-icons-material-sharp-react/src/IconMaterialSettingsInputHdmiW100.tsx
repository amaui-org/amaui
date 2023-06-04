import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputHdmiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputHdmiW100'

      short_name='SettingsInputHdmi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 20.7v-2l-3-6V8.3h1V4.6h9.4v3.7h1v4.4l-3 6v2ZM8 8.3h2.15v-2h.7v2h2.3v-2h.7v2H16v-3H8ZM10 20h4v-1.5l3-6V9H7v3.5l3 6Zm2-5.5Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputHdmiW100.displayName = 'AmauiIconMaterialSettingsInputHdmiW100';

export default IconMaterialSettingsInputHdmiW100;
