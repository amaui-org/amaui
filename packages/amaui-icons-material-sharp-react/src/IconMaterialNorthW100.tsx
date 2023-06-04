import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNorthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthW100'

      short_name='North'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 20.6V4.475L6.325 9.8l-.475-.475L12 3.175l6.15 6.15-.475.5L12.35 4.5v16.1Z"/>
    </Icon>
  );
});

IconMaterialNorthW100.displayName = 'AmauiIconMaterialNorthW100';

export default IconMaterialNorthW100;
