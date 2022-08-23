import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardReturnSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardReturnSharpW100'
      short_name='KeyboardReturn'

      {...props}
    >
      <path d="M8.875 17.1 3.775 12 8.875 6.9 9.375 7.4 5.125 11.65H19.525V7.65H20.225V12.35H5.125L9.375 16.6Z"/>
    </Icon>
  );
});

IconMaterialKeyboardReturnSharpW100.displayName = 'AmauiIconMaterialKeyboardReturnSharpW100';

export default IconMaterialKeyboardReturnSharpW100;
