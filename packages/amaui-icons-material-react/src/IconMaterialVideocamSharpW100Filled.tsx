import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamSharpW100Filled'
      short_name='Videocam'

      {...props}
    >
      <path d="M3.925 18.7V5.3H17.325V11.5L20.075 8.75V15.25L17.325 12.5V18.7Z"/>
    </Icon>
  );
});

IconMaterialVideocamSharpW100Filled.displayName = 'AmauiIconMaterialVideocamSharpW100Filled';

export default IconMaterialVideocamSharpW100Filled;
