import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSharpW100'
      short_name='Window'

      {...props}
    >
      <path d="M3.3 20.7V3.3H20.7V20.7ZM11.65 11.65V4H4V11.65ZM11.65 12.35H4V20H11.65ZM12.35 12.35V20H20V12.35ZM12.35 11.65H20V4H12.35Z"/>
    </Icon>
  );
});

export default IconMaterialWindowSharpW100;
