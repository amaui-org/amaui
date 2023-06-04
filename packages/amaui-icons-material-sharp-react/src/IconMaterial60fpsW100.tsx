import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial60fpsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsW100'

      short_name='60fps'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.15 17.85V6.15h5.7v.7h-5v4.3h6v6.7Zm.7-.7h5.3v-5.3h-5.3Zm10 0h6.3V6.85h-6.3Zm-.7.7V6.15h7.7v11.7Z"/>
    </Icon>
  );
});

IconMaterial60fpsW100.displayName = 'AmauiIconMaterial60fpsW100';

export default IconMaterial60fpsW100;
