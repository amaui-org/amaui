import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGarageHomeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageHomeRounded'
      short_name='GarageHome'

      {...props}
    >
      <path d="M4 21V9l8-6 8 6v12h-2V10l-6-4.5L6 10v11Zm5-2h6v-2H9Zm0-4h6v-2H9Zm-2 6V11h10v10Z"/>
    </Icon>
  );
});

IconMaterialGarageHomeRounded.displayName = 'AmauiIconMaterialGarageHomeRounded';

export default IconMaterialGarageHomeRounded;
