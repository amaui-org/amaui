import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEnhancedEncryptionSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnhancedEncryptionSharp'
      short_name='EnhancedEncryption'

      {...props}
    >
      <path d="M4 22V8H7V6Q7 3.925 8.463 2.462Q9.925 1 12 1Q14.075 1 15.538 2.462Q17 3.925 17 6V8H20V22ZM9 8H15V6Q15 4.75 14.125 3.875Q13.25 3 12 3Q10.75 3 9.875 3.875Q9 4.75 9 6ZM6 20H18V10H6ZM11 19H13V16H16V14H13V11H11V14H8V16H11ZM6 20V10V20Z"/>
    </Icon>
  );
});

IconMaterialEnhancedEncryptionSharp.displayName = 'AmauiIconMaterialEnhancedEncryptionSharp';

export default IconMaterialEnhancedEncryptionSharp;
