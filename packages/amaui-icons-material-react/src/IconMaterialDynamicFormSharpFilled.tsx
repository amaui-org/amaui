import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDynamicFormSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormSharpFilled'
      short_name='DynamicForm'

      {...props}
    >
      <path d="M2 11V4H13V11ZM2 20V13H15V20ZM17 20V11H15V4H22L20 9H22ZM4.75 17.25H6.25V15.75H4.75ZM4.75 8.25H6.25V6.75H4.75Z"/>
    </Icon>
  )
});

export default IconMaterialDynamicFormSharpFilled;
