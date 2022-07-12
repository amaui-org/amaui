import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextFieldsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFieldsSharp'
      short_name='TextFields'

      {...props}
    >
      <path d="M7 20V7H2V4H15V7H10V20ZM16 20V12H13V9H22V12H19V20Z"/>
    </Icon>
  )
});

export default IconMaterialTextFieldsSharp;
