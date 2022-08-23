import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardHideSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardHideSharp'
      short_name='KeyboardHide'

      {...props}
    >
      <path d="M2 17V3H22V17ZM4 15V5V15ZM11 8H13V6H11ZM11 11H13V9H11ZM8 8H10V6H8ZM8 11H10V9H8ZM5 11H7V9H5ZM5 8H7V6H5ZM8 14H16V12H8ZM14 11H16V9H14ZM14 8H16V6H14ZM17 11H19V9H17ZM17 8H19V6H17ZM12 23 8 19H16ZM4 15H20V5H4Z"/>
    </Icon>
  );
});

IconMaterialKeyboardHideSharp.displayName = 'AmauiIconMaterialKeyboardHideSharp';

export default IconMaterialKeyboardHideSharp;
