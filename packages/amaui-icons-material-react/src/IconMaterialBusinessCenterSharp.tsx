import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBusinessCenterSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterSharp'
      short_name='BusinessCenter'

      {...props}
    >
      <path d="M2 21V6H8V2H16V6H22V21ZM10 6H14V4H10ZM20 15H15V17H9V15H4V19H20ZM11 15H13V13H11ZM4 13H9V11H15V13H20V8H4ZM12 14Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterSharp.displayName = 'AmauiIconMaterialBusinessCenterSharp';

export default IconMaterialBusinessCenterSharp;
