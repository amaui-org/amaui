import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputComponentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputComponentW100'

      short_name='SettingsInputComponent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 22.35v-4h-2V6.65h2V2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.65h2v11.7h-2v4Zm8 0v-4h-2V6.65h2V2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.65h2v11.7h-2v4Zm8 0v-4h-2V6.65h2V2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.65h2v11.7h-2v4Zm-17.3-15v5.3h3.3v-5.3Zm8 0v5.3h3.3v-5.3Zm8 0v5.3h3.3v-5.3Zm-16 10.3h3.3v-4.3h-3.3Zm8 0h3.3v-4.3h-3.3Zm8 0h3.3v-4.3h-3.3ZM4 13Zm8 0Zm8 0Zm-17.65-.35h3.3-3.3Zm8 0h3.3-3.3Zm8 0h3.3-3.3Zm-16 .7h3.3Zm8 0h3.3Zm8 0h3.3Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputComponentW100.displayName = 'AmauiIconMaterialSettingsInputComponentW100';

export default IconMaterialSettingsInputComponentW100;
