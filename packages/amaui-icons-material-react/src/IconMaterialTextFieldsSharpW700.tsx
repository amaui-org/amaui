import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextFieldsSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFieldsSharpW700'
      short_name='TextFields'

      {...props}
    >
      <path d="M6.225 20.775V7H1.225V3.225H15V7H10V20.775ZM16 20.775V12.775H13V9H22.775V12.775H19.775V20.775Z"/>
    </Icon>
  )
});

export default IconMaterialTextFieldsSharpW700;
