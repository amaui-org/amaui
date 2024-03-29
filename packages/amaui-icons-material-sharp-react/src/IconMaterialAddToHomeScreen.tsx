import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToHomeScreen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreen'

      short_name='AddToHomeScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.4 17 3 15.6 8.6 10H5V8h7v7h-2v-3.6ZM8 21h10v-1H8ZM8 4h10V3H8ZM6 23v-6h2v1h10V6H8v1H6V1h14v22ZM8 4V3v1Zm0 17v-1 1Z"/>
    </Icon>
  );
});

IconMaterialAddToHomeScreen.displayName = 'AmauiIconMaterialAddToHomeScreen';

export default IconMaterialAddToHomeScreen;
