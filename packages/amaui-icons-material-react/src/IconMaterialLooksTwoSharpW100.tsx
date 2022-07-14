import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksTwoSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwoSharpW100'
      short_name='LooksTwo'

      {...props}
    >
      <path d="M9.65 16.35H14.35V15.65H10.35V12.35H14.35V7.65H9.65V8.35H13.65V11.65H9.65ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

export default IconMaterialLooksTwoSharpW100;
