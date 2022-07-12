import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSharpW700'
      short_name='Window'

      {...props}
    >
      <path d="M1.15 22.85V1.15H22.85V22.85ZM11 11V4.3H4.3V11ZM11 13H4.3V19.7H11ZM13 13V19.7H19.7V13ZM13 11H19.7V4.3H13Z"/>
    </Icon>
  )
});

export default IconMaterialWindowSharpW700;
