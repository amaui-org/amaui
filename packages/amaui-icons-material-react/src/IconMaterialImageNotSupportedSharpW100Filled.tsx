import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImageNotSupportedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageNotSupportedSharpW100Filled'
      short_name='ImageNotSupported'

      {...props}
    >
      <path d="M20 21 18.7 19.7H4.3V5.3L3 4L3.5 3.5L20.5 20.5ZM7.3 16.35H15.35L12.725 13.75L11.5 15.4L9.65 13.25ZM19.7 16.875 7.125 4.3H19.7Z"/>
    </Icon>
  );
});

IconMaterialImageNotSupportedSharpW100Filled.displayName = 'AmauiIconMaterialImageNotSupportedSharpW100Filled';

export default IconMaterialImageNotSupportedSharpW100Filled;
