import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnhancedEncryptionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnhancedEncryptionFilled'

      short_name='EnhancedEncryption'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V8h3V6q0-2.075 1.463-3.538Q9.925 1 12 1t3.538 1.462Q17 3.925 17 6v2h3v14ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6Zm2 11h2v-3h3v-2h-3v-3h-2v3H8v2h3Z"/>
    </Icon>
  );
});

IconMaterialEnhancedEncryptionFilled.displayName = 'AmauiIconMaterialEnhancedEncryptionFilled';

export default IconMaterialEnhancedEncryptionFilled;
