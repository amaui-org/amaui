import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardSharpW100Filled'
      short_name='Keyboard'

      {...props}
    >
      <path d="M3.3 17.7V6.3H20.7V17.7ZM11.3 9.7H12.7V8.3H11.3ZM11.3 12.7H12.7V11.3H11.3ZM8.3 9.7H9.7V8.3H8.3ZM8.3 12.7H9.7V11.3H8.3ZM5.3 12.7H6.7V11.3H5.3ZM5.3 9.7H6.7V8.3H5.3ZM8.3 15.7H15.7V14.3H8.3ZM14.3 12.7H15.7V11.3H14.3ZM14.3 9.7H15.7V8.3H14.3ZM17.3 12.7H18.7V11.3H17.3ZM17.3 9.7H18.7V8.3H17.3Z"/>
    </Icon>
  );
});

IconMaterialKeyboardSharpW100Filled.displayName = 'AmauiIconMaterialKeyboardSharpW100Filled';

export default IconMaterialKeyboardSharpW100Filled;
