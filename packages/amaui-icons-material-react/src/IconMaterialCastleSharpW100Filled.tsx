import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCastleSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastleSharpW100Filled'
      short_name='Castle'

      {...props}
    >
      <path d="M1.65 20.35V9.65H2.35V11.65H5.65V3.65H6.35V5.65H9.65V3.65H10.35V5.65H13.65V3.65H14.35V5.65H17.65V3.65H18.35V11.65H21.65V9.65H22.35V20.35H14.65V15.35H9.35V20.35ZM9.65 11.35H10.35V9.4H9.65ZM13.65 11.35H14.35V9.4H13.65Z"/>
    </Icon>
  );
});

IconMaterialCastleSharpW100Filled.displayName = 'AmauiIconMaterialCastleSharpW100Filled';

export default IconMaterialCastleSharpW100Filled;
