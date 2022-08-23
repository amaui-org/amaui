import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeWorkSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkSharp'
      short_name='HomeWork'

      {...props}
    >
      <path d="M17 9H19V7H17ZM17 13H19V11H17ZM17 17H19V15H17ZM17 21V19H21V5H12V6.4L10 4.95V3H23V21ZM1 21V11L8 6L15 11V21ZM3 19H6V14H10V19H13V12L8 8.5L3 12ZM8 14ZM8 14ZM17 10.025Z"/>
    </Icon>
  );
});

IconMaterialHomeWorkSharp.displayName = 'AmauiIconMaterialHomeWorkSharp';

export default IconMaterialHomeWorkSharp;
