import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFenceSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FenceSharpW100Filled'
      short_name='Fence'

      {...props}
    >
      <path d="M5.65 19.35V15.35H4.95V14.65H5.65V11.35H4.95V10.65H5.65V7.275L8 4.925L10 6.925L12.025 4.925L14.025 6.925L16.025 4.925L18.375 7.275V10.65H19.05V11.35H18.375V14.65H19.05V15.35H18.375V19.35ZM6.35 10.65H9.65V7.55L8 5.9L6.35 7.55ZM10.35 10.65H13.65V7.55L12 5.9L10.35 7.55ZM14.375 10.65H17.65V7.55L16 5.9L14.375 7.55ZM6.35 14.65H9.65V11.35H6.35ZM10.35 14.65H13.65V11.35H10.35ZM14.375 14.65H17.65V11.35H14.375ZM6.35 18.65H9.65V15.35H6.35ZM10.35 18.65H13.65V15.35H10.35ZM14.375 18.65H17.65V15.35H14.375Z"/>
    </Icon>
  );
});

IconMaterialFenceSharpW100Filled.displayName = 'AmauiIconMaterialFenceSharpW100Filled';

export default IconMaterialFenceSharpW100Filled;
