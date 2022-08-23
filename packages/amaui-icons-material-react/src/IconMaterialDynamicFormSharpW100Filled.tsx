import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDynamicFormSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormSharpW100Filled'
      short_name='DynamicForm'

      {...props}
    >
      <path d="M2.65 11V4.65H13V11ZM2.65 19.35V13H15V19.35ZM17 19.35V11H15V4.65H21.05L19.05 9.8H21ZM5.075 16.925H6.575V15.425H5.075ZM5.075 8.575H6.575V7.075H5.075Z"/>
    </Icon>
  );
});

IconMaterialDynamicFormSharpW100Filled.displayName = 'AmauiIconMaterialDynamicFormSharpW100Filled';

export default IconMaterialDynamicFormSharpW100Filled;
