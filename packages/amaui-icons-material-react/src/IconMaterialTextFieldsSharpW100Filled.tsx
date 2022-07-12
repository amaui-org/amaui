import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextFieldsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFieldsSharpW100Filled'
      short_name='TextFields'

      {...props}
    >
      <path d="M8.15 18.85V5.85H3.15V5.15H13.85V5.85H8.85V18.85ZM17.15 18.85V10.85H14.15V10.15H20.85V10.85H17.85V18.85Z"/>
    </Icon>
  )
});

export default IconMaterialTextFieldsSharpW100Filled;
