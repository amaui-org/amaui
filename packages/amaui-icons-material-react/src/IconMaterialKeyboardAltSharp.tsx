import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardAltSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardAltSharp'
      short_name='KeyboardAlt'

      {...props}
    >
      <path d="M1 21V4H23V21ZM3 19H21V6H3ZM9 10H11V8H9ZM5 10H7V8H5ZM8 17H16V16H8ZM13 10H15V8H13ZM9 14H11V12H9ZM5 14H7V12H5ZM13 14H15V12H13ZM17 10H19V8H17ZM17 14H19V12H17ZM3 19V6V19Z"/>
    </Icon>
  );
});

IconMaterialKeyboardAltSharp.displayName = 'AmauiIconMaterialKeyboardAltSharp';

export default IconMaterialKeyboardAltSharp;
