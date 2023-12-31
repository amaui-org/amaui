import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableRemoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableRemoveW100'

      short_name='VariableRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M563-332H172v-296h616v71h-28v-43H200v240h363v28Zm-363-28v-240 240Zm463 93 85-85-85-85 20-20 85 85 85-85 20 20-85 85 85 85-20 20-85-85-85 85-20-20Z"/>
    </Icon>
  );
});

IconMaterialVariableRemoveW100.displayName = 'AmauiIconMaterialVariableRemoveW100';

export default IconMaterialVariableRemoveW100;
