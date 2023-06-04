import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGarageHome = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageHome'

      short_name='GarageHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21V9l8-6 8 6v12h-2V10l-6-4.5L6 10v11Zm5-2h6v-2H9Zm0-4h6v-2H9Zm-2 6V11h10v10Z"/>
    </Icon>
  );
});

IconMaterialGarageHome.displayName = 'AmauiIconMaterialGarageHome';

export default IconMaterialGarageHome;
