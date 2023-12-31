import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableRemoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableRemoveW100Filled'

      short_name='VariableRemove'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-332v-296h616v72q-5-1-10-1h-10q-85 0-145 60t-60 145v10q0 5 1 10H172Zm511 85-20-20 85-85-85-85 20-20 85 85 85-85 20 20-85 85 85 85-20 20-85-85-85 85Z"/>
    </Icon>
  );
});

IconMaterialVariableRemoveW100Filled.displayName = 'AmauiIconMaterialVariableRemoveW100Filled';

export default IconMaterialVariableRemoveW100Filled;
