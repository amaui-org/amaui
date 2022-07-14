import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksTwoSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwoSharpW100Filled'
      short_name='LooksTwo'

      {...props}
    >
      <path d="M9.65 16.35H14.35V15.65H10.35V12.35H14.35V7.65H9.65V8.35H13.65V11.65H9.65ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

export default IconMaterialLooksTwoSharpW100Filled;
