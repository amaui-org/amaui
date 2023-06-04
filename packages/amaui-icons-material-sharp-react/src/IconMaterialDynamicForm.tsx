import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDynamicForm = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicForm'

      short_name='DynamicForm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 11V4h11v7Zm2-2h7V6H4ZM2 20v-7h13v7Zm2-2h9v-3H4Zm13 2v-9h-2V4h7l-2 5h2ZM4.75 17.25h1.5v-1.5h-1.5Zm0-9h1.5v-1.5h-1.5ZM4 9V6v3Zm0 9v-3 3Z"/>
    </Icon>
  );
});

IconMaterialDynamicForm.displayName = 'AmauiIconMaterialDynamicForm';

export default IconMaterialDynamicForm;
