import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableRemove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableRemove'

      short_name='VariableRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-280H120v-400h720v120h-80v-40H200v240h360v80Zm-360-80v-240 240Zm440 104 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83-56-56Z"/>
    </Icon>
  );
});

IconMaterialVariableRemove.displayName = 'AmauiIconMaterialVariableRemove';

export default IconMaterialVariableRemove;
