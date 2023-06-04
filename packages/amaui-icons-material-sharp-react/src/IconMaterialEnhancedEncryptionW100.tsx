import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnhancedEncryptionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnhancedEncryptionW100'

      short_name='EnhancedEncryption'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V9.3h3v-2q0-1.55 1.075-2.625T12 3.6q1.55 0 2.625 1.075T15.7 7.3v2h3v11.4ZM9 9.3h6v-2q0-1.25-.875-2.125T12 4.3q-1.25 0-2.125.875T9 7.3ZM6 20h12V10H6Zm5.65-1.65h.7v-3h3v-.7h-3v-3h-.7v3h-3v.7h3ZM6 20V10v10Z"/>
    </Icon>
  );
});

IconMaterialEnhancedEncryptionW100.displayName = 'AmauiIconMaterialEnhancedEncryptionW100';

export default IconMaterialEnhancedEncryptionW100;
