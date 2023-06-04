import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDynamicFormFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormFilled'

      short_name='DynamicForm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 11V4h11v7Zm0 9v-7h13v7Zm15 0v-9h-2V4h7l-2 5h2ZM4.75 17.25h1.5v-1.5h-1.5Zm0-9h1.5v-1.5h-1.5Z"/>
    </Icon>
  );
});

IconMaterialDynamicFormFilled.displayName = 'AmauiIconMaterialDynamicFormFilled';

export default IconMaterialDynamicFormFilled;
