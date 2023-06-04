import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToHomeScreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenW100Filled'

      short_name='AddToHomeScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.4 16.1-.5-.5 6.25-6.25h-4.5v-.7h5.7v5.7h-.7v-4.5Zm2.9 5.6v-4.6H8v1.55h10V5.35H8V6.9h-.7V2.3h11.4v19.4Z"/>
    </Icon>
  );
});

IconMaterialAddToHomeScreenW100Filled.displayName = 'AmauiIconMaterialAddToHomeScreenW100Filled';

export default IconMaterialAddToHomeScreenW100Filled;
