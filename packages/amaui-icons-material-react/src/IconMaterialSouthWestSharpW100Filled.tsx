import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthWestSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthWestSharpW100Filled'
      short_name='SouthWest'

      {...props}
    >
      <path d="M5.65 18.35V9.65H6.35V17.15L18.6 4.9L19.1 5.4L6.85 17.65H14.35V18.35Z"/>
    </Icon>
  );
});

IconMaterialSouthWestSharpW100Filled.displayName = 'AmauiIconMaterialSouthWestSharpW100Filled';

export default IconMaterialSouthWestSharpW100Filled;
