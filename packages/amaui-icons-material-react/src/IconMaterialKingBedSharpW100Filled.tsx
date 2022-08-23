import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKingBedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KingBedSharpW100Filled'
      short_name='KingBed'

      {...props}
    >
      <path d="M4.7 17.7H4.3L4 15.7H3.3V11.3H5.3V7.6H18.7V11.3H20.7V15.7H20L19.7 17.7H19.3L19 15.7H5ZM12.35 11.3H18V8.3H12.35ZM6 11.3H11.65V8.3H6Z"/>
    </Icon>
  );
});

IconMaterialKingBedSharpW100Filled.displayName = 'AmauiIconMaterialKingBedSharpW100Filled';

export default IconMaterialKingBedSharpW100Filled;
