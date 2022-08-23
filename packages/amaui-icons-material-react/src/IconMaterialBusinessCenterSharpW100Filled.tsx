import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBusinessCenterSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterSharpW100Filled'
      short_name='BusinessCenter'

      {...props}
    >
      <path d="M3.3 13.65V7.3H9.3V4.6H14.7V7.3H20.7V13.65H13.7V12.3H10.3V13.65ZM10 7.3H14V5.3H10ZM11 15V13H13V15ZM3.3 19.7V14.35H10.3V15.7H13.7V14.35H20.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterSharpW100Filled.displayName = 'AmauiIconMaterialBusinessCenterSharpW100Filled';

export default IconMaterialBusinessCenterSharpW100Filled;
