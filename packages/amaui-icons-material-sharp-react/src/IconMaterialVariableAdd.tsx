import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableAdd'

      short_name='VariableAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-280H120v-400h720v120h-80v-40H200v240h360v80Zm-360-80v-240 240Zm560 200v-120H640v-80h120v-120h80v120h120v80H840v120h-80Z"/>
    </Icon>
  );
});

IconMaterialVariableAdd.displayName = 'AmauiIconMaterialVariableAdd';

export default IconMaterialVariableAdd;
