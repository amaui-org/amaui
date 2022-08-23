import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderAllSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllSharp'
      short_name='BorderAll'

      {...props}
    >
      <path d="M3 21V3H21V21ZM19 19V13H13V19ZM19 5H13V11H19ZM5 5V11H11V5ZM5 19H11V13H5Z"/>
    </Icon>
  );
});

IconMaterialBorderAllSharp.displayName = 'AmauiIconMaterialBorderAllSharp';

export default IconMaterialBorderAllSharp;
