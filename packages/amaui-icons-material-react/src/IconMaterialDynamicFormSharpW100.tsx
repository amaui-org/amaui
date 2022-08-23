import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDynamicFormSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormSharpW100'
      short_name='DynamicForm'

      {...props}
    >
      <path d="M2.65 11V4.65H13V11ZM3.35 10.3H12.3V5.35H3.35ZM2.65 19.35V13H15V19.35ZM3.35 18.65H14.3V13.7H3.35ZM17 19.35V11H15V4.65H21.05L19.05 9.8H21ZM5.075 16.925H6.575V15.425H5.075ZM5.075 8.575H6.575V7.075H5.075ZM3.35 10.3V5.35V10.3ZM3.35 18.65V13.7V18.65Z"/>
    </Icon>
  );
});

IconMaterialDynamicFormSharpW100.displayName = 'AmauiIconMaterialDynamicFormSharpW100';

export default IconMaterialDynamicFormSharpW100;
