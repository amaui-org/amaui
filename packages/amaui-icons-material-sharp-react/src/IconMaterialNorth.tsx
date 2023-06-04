import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNorth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='North'

      short_name='North'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22V5.825L6.4 10.4 5 9l7-7 7 7-1.4 1.425-4.6-4.6V22Z"/>
    </Icon>
  );
});

IconMaterialNorth.displayName = 'AmauiIconMaterialNorth';

export default IconMaterialNorth;
