import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToHomeScreenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenW100'

      short_name='AddToHomeScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.4 16.1-.5-.5 6.25-6.25h-4.5v-.7h5.7v5.7h-.7v-4.5ZM8 21h10v-1.65H8ZM8 4.65h10V3H8ZM7.3 21.7v-4.6H8v1.55h10V5.35H8V6.9h-.7V2.3h11.4v19.4ZM8 4.65V3v1.65ZM8 21v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialAddToHomeScreenW100.displayName = 'AmauiIconMaterialAddToHomeScreenW100';

export default IconMaterialAddToHomeScreenW100;
