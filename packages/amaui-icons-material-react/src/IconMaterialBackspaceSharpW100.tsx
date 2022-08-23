import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackspaceSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceSharpW100'
      short_name='Backspace'

      {...props}
    >
      <path d="M10.95 15.1 13.55 12.5 16.15 15.1 16.65 14.6 14.05 12 16.65 9.4 16.15 8.9 13.55 11.5 10.95 8.9 10.45 9.4 13.05 12 10.45 14.6ZM8.525 17.7 4.45 12 8.475 6.3H19.55V17.7ZM8.875 17H18.85V7H8.875L5.3 12ZM18.85 17V12V7Z"/>
    </Icon>
  );
});

IconMaterialBackspaceSharpW100.displayName = 'AmauiIconMaterialBackspaceSharpW100';

export default IconMaterialBackspaceSharpW100;
