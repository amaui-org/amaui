import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedSharpW100Filled'
      short_name='Bed'

      {...props}
    >
      <path d="M3.3 17.7V11.45H4.3V7.6H19.7V11.45H20.7V17.7H20V15.7H4V17.7ZM12.35 11.3H19V8.3H12.35ZM5 11.3H11.65V8.3H5Z"/>
    </Icon>
  );
});

IconMaterialBedSharpW100Filled.displayName = 'AmauiIconMaterialBedSharpW100Filled';

export default IconMaterialBedSharpW100Filled;
