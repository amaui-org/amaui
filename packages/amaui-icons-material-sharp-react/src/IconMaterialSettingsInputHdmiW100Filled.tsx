import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputHdmiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputHdmiW100Filled'

      short_name='SettingsInputHdmi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 20.7v-2l-3-6V8.3h1V4.6h9.4v3.7h1v4.4l-3 6v2ZM8 8.3h2.15v-2h.7v2h2.3v-2h.7v2H16V6.1q0-.35-.225-.575Q15.55 5.3 15.2 5.3H8.8q-.35 0-.575.225Q8 5.75 8 6.1Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputHdmiW100Filled.displayName = 'AmauiIconMaterialSettingsInputHdmiW100Filled';

export default IconMaterialSettingsInputHdmiW100Filled;
