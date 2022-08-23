import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHiveSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HiveSharpW100Filled'
      short_name='Hive'

      {...props}
    >
      <path d="M15.85 11.65 14.25 8.775 15.85 5.9H19L20.6 8.775L19 11.65ZM10.425 14.875 8.825 12 10.425 9.125H13.575L15.175 12L13.575 14.875ZM10.425 8.4 8.825 5.525 10.425 2.65H13.575L15.175 5.525L13.575 8.4ZM5 11.65 3.4 8.775 5 5.9H8.15L9.75 8.775L8.15 11.65ZM5 18.1 3.4 15.225 5 12.35H8.15L9.75 15.225L8.15 18.1ZM10.425 21.35 8.825 18.475 10.425 15.6H13.575L15.175 18.475L13.575 21.35ZM15.85 18.1 14.25 15.225 15.85 12.35H19L20.6 15.225L19 18.1Z"/>
    </Icon>
  );
});

IconMaterialHiveSharpW100Filled.displayName = 'AmauiIconMaterialHiveSharpW100Filled';

export default IconMaterialHiveSharpW100Filled;
