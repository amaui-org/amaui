import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDynamicFormSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormSharp'
      short_name='DynamicForm'

      {...props}
    >
      <path d="M2 11V4H13V11ZM4 9H11V6H4ZM2 20V13H15V20ZM4 18H13V15H4ZM17 20V11H15V4H22L20 9H22ZM4.75 17.25H6.25V15.75H4.75ZM4.75 8.25H6.25V6.75H4.75ZM4 9V6V9ZM4 18V15V18Z"/>
    </Icon>
  );
});

IconMaterialDynamicFormSharp.displayName = 'AmauiIconMaterialDynamicFormSharp';

export default IconMaterialDynamicFormSharp;
