import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDynamicFormW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormW100Filled'

      short_name='DynamicForm'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 11V4.65H13V11Zm0 8.35V13H15v6.35Zm14.35 0V11h-2V4.65h6.05l-2 5.15H21ZM5.075 16.925h1.5v-1.5h-1.5Zm0-8.35h1.5v-1.5h-1.5Z"/>
    </Icon>
  );
});

IconMaterialDynamicFormW100Filled.displayName = 'AmauiIconMaterialDynamicFormW100Filled';

export default IconMaterialDynamicFormW100Filled;
