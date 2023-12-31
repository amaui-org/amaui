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
      <path d="M560-280H160q-17 0-28.5-11.5T120-320v-320q0-17 11.5-28.5T160-680h640q17 0 28.5 11.5T840-640v80h-80v-40H200v240h360v80Zm-360-80v-240 240Zm560 80h-80q-17 0-28.5-11.5T640-320q0-17 11.5-28.5T680-360h80v-80q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440v80h80q17 0 28.5 11.5T960-320q0 17-11.5 28.5T920-280h-80v80q0 17-11.5 28.5T800-160q-17 0-28.5-11.5T760-200v-80Z"/>
    </Icon>
  );
});

IconMaterialVariableAdd.displayName = 'AmauiIconMaterialVariableAdd';

export default IconMaterialVariableAdd;
