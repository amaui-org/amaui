import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardTabSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabSharpW100Filled'
      short_name='KeyboardTab'

      {...props}
    >
      <path d="M12.025 17.075 11.525 16.6 15.775 12.35H2.65V11.65H15.75L11.55 7.4L12.025 6.925L17.1 12ZM20.65 17.35V6.65H21.35V17.35Z"/>
    </Icon>
  );
});

IconMaterialKeyboardTabSharpW100Filled.displayName = 'AmauiIconMaterialKeyboardTabSharpW100Filled';

export default IconMaterialKeyboardTabSharpW100Filled;
