import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputComponentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputComponentW100Filled'

      short_name='SettingsInputComponent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.65 22.35v-4h-2v-5h4.7v5h-2v4Zm-8 0v-4h-2v-5h4.7v5h-2v4Zm-8 0v-4h-2v-5h4.7v5h-2v4Zm-2-9.7v-6h2V2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.65h2v6Zm8 0v-6h2V2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.65h2v6Zm8 0v-6h2V2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.65h2v6Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputComponentW100Filled.displayName = 'AmauiIconMaterialSettingsInputComponentW100Filled';

export default IconMaterialSettingsInputComponentW100Filled;
