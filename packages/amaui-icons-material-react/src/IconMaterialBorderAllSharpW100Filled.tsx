import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderAllSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllSharpW100Filled'
      short_name='BorderAll'

      {...props}
    >
      <path d="M12.35 4.3H19.7V11.65H12.35ZM12.35 19.7V12.35H19.7V19.7ZM4.3 11.65V4.3H11.65V11.65ZM4.3 19.7V12.35H11.65V19.7Z"/>
    </Icon>
  );
});

export default IconMaterialBorderAllSharpW100Filled;
