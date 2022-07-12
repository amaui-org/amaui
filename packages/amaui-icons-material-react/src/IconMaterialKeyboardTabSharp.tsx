import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardTabSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardTabSharp'
      short_name='KeyboardTab'

      {...props}
    >
      <path d="M12 18 10.575 16.6 14.175 13H2V11H14.175L10.6 7.4L12 6L18 12ZM20 18V6H22V18Z"/>
    </Icon>
  )
});

export default IconMaterialKeyboardTabSharp;
