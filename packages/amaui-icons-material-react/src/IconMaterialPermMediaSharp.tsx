import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermMediaSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermMediaSharp'
      short_name='PermMedia'

      {...props}
    >
      <path d="M5 17V2H12L14 4H23V17ZM7 15H21V6H13.175L11.175 4H7ZM1 21V6H3V19H20V21ZM9 13H19L15.625 8.5L13 12L11.375 9.825ZM7 15V4V6V15Z"/>
    </Icon>
  );
});

IconMaterialPermMediaSharp.displayName = 'AmauiIconMaterialPermMediaSharp';

export default IconMaterialPermMediaSharp;
