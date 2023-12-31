import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGarageDoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageDoorW100Filled'

      short_name='GarageDoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-408v-28h280v28H340Zm0 124v-28h280v28H340Zm0 124v-28h280v28H340Zm140-612 328 280H708v332h-28v-372H280v372h-28v-332H152l328-280Z"/>
    </Icon>
  );
});

IconMaterialGarageDoorW100Filled.displayName = 'AmauiIconMaterialGarageDoorW100Filled';

export default IconMaterialGarageDoorW100Filled;
