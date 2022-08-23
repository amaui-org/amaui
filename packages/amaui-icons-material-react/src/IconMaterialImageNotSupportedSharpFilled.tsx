import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageNotSupportedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupportedSharpFilled'
      short_name='ImageNotSupported'

      {...props}
    >
      <path d="M20.475 23.3 18.175 21H3V5.8L0.7 3.5L2.1 2.1L21.9 21.9ZM6 17H14.175L11.85 14.675L11 15.725L9 13ZM21 18.175 5.825 3H21Z"/>
    </Icon>
  );
});

IconMaterialImageNotSupportedSharpFilled.displayName = 'AmauiIconMaterialImageNotSupportedSharpFilled';

export default IconMaterialImageNotSupportedSharpFilled;
