import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageNotSupportedSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupportedSharp'
      short_name='ImageNotSupported'

      {...props}
    >
      <path d="M20.475 23.3 18.175 21H3V5.8L0.7 3.5L2.1 2.1L21.9 21.9ZM5 19H16.175L14.175 17H6L9 13L11 15.725L11.85 14.675L5 7.825ZM21 18.175 19 16.175V5H7.825L5.825 3H21ZM13.45 10.625ZM10.6 13.425Z"/>
    </Icon>
  );
});

IconMaterialImageNotSupportedSharp.displayName = 'AmauiIconMaterialImageNotSupportedSharp';

export default IconMaterialImageNotSupportedSharp;
