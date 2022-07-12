import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckBoxSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxSharpW100Filled'
      short_name='CheckBox'

      {...props}
    >
      <path d="M10.6 15.3 16.8 9.1 16.3 8.6 10.6 14.3 7.75 11.45 7.25 11.95ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialCheckBoxSharpW100Filled;
