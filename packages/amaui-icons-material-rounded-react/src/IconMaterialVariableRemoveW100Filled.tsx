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
      <path d="M202-332q-13 0-21.5-8.5T172-362v-236q0-13 8.5-21.5T202-628h556q13 0 21.5 8.5T788-598v42q-5-1-10-1h-10q-85 0-145 60t-60 145v10q0 5 1 10H202Zm566 0-75 75q-4 4-9.5 4.5T673-257q-5-5-5-10t5-10l75-75-75-75q-4-4-4.5-9.5T673-447q5-5 10-5t10 5l75 75 75-75q4-4 9.5-4.5T863-447q5 5 5 10t-5 10l-75 75 75 75q4 4 4.5 9.5T863-257q-5 5-10 5t-10-5l-75-75Z"/>
    </Icon>
  );
});

IconMaterialVariableRemoveW100Filled.displayName = 'AmauiIconMaterialVariableRemoveW100Filled';

export default IconMaterialVariableRemoveW100Filled;
