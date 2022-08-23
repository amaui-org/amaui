import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipToBackSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToBackSharpW100Filled'
      short_name='FlipToBack'

      {...props}
    >
      <path d="M8.3 9V7H9V9ZM8.3 13V11H9V13ZM8.3 5V4.3H9V5ZM11 15.7V15H13V15.7ZM19 5V4.3H19.7V5ZM11 5V4.3H13V5ZM8.3 15.7V15H9V15.7ZM19 13V11H19.7V13ZM19 9V7H19.7V9ZM19 15.7V15H19.7V15.7ZM4.3 19.7V7H5V19H17V19.7ZM15 5V4.3H17V5ZM15 15.7V15H17V15.7Z"/>
    </Icon>
  );
});

IconMaterialFlipToBackSharpW100Filled.displayName = 'AmauiIconMaterialFlipToBackSharpW100Filled';

export default IconMaterialFlipToBackSharpW100Filled;
