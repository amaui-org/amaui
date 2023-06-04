import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDynamicFormW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormW100'

      short_name='DynamicForm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 11V4.65H13V11Zm.7-.7h8.95V5.35H3.35Zm-.7 9.05V13H15v6.35Zm.7-.7H14.3V13.7H3.35Zm13.65.7V11h-2V4.65h6.05l-2 5.15H21ZM5.075 16.925h1.5v-1.5h-1.5Zm0-8.35h1.5v-1.5h-1.5ZM3.35 10.3V5.35v4.95Zm0 8.35V13.7v4.95Z"/>
    </Icon>
  );
});

IconMaterialDynamicFormW100.displayName = 'AmauiIconMaterialDynamicFormW100';

export default IconMaterialDynamicFormW100;
