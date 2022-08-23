import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHiveSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HiveSharpW100'
      short_name='Hive'

      {...props}
    >
      <path d="M10.125 21.35 8.425 18.35H5.125L3.25 15L4.95 12L3.25 9L5.125 5.65H8.425L10.125 2.65H13.875L15.575 5.65H18.875L20.75 9L19.05 12L20.75 15L18.875 18.35H15.575L13.875 21.35ZM15.575 11.65H18.475L19.95 9L18.475 6.35H15.575L14.075 9ZM10.575 14.65H13.425L14.925 12L13.425 9.35H10.575L9.075 12ZM10.575 8.65H13.425L14.95 5.975L13.45 3.35H10.55L9.05 5.975ZM5.55 11.65H8.425L9.925 9L8.425 6.35H5.55L4.05 9ZM5.55 17.65H8.425L9.925 15L8.425 12.35H5.525L4.05 15ZM10.55 20.65H13.45L14.95 18.025L13.425 15.35H10.575L9.05 18.025ZM15.575 17.65H18.45L19.95 15L18.45 12.35H15.575L14.075 15Z"/>
    </Icon>
  );
});

IconMaterialHiveSharpW100.displayName = 'AmauiIconMaterialHiveSharpW100';

export default IconMaterialHiveSharpW100;
