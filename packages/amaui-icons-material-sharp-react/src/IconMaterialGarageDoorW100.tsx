import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGarageDoorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageDoorW100'

      short_name='GarageDoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M340-408v-28h280v28H340Zm0 124v-28h280v28H340Zm0 124v-28h280v28H340Zm140-612 328 280H708v332h-28v-372H280v372h-28v-332H152l328-280Zm0 38L276-560h408L480-734Zm0 174h204-408 204Z"/>
    </Icon>
  );
});

IconMaterialGarageDoorW100.displayName = 'AmauiIconMaterialGarageDoorW100';

export default IconMaterialGarageDoorW100;
