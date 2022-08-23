import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowLeftSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowLeftSharpW100Filled'
      short_name='KeyboardArrowLeft'

      {...props}
    >
      <path d="M14 17.1 8.9 12 14 6.9 14.5 7.4 9.9 12 14.5 16.6Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowLeftSharpW100Filled.displayName = 'AmauiIconMaterialKeyboardArrowLeftSharpW100Filled';

export default IconMaterialKeyboardArrowLeftSharpW100Filled;
