import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMountainFlagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MountainFlagW100Filled'

      short_name='MountainFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m466-409-65 33-88-59 39-80q8-15 22.5-24t31.5-9h60v-250q0-13 8.5-21.5T496-828h158q8 0 12.5 7t.5 15l-13 25q-2 3-2 7t2 7l13 25q4 8-.5 15t-12.5 7H494v172h57q17 0 31 9t22 24l41 82-86 57-66-33q-6-3-13.5-3t-13.5 3ZM185-175l116-235 84 56q7 5 14.5 5.5T415-352l65-32 65 33q8 4 15.5 3.5T575-353l83-55 116 233q8 15-1 29t-26 14H212q-17 0-26-14t-1-29Z"/>
    </Icon>
  );
});

IconMaterialMountainFlagW100Filled.displayName = 'AmauiIconMaterialMountainFlagW100Filled';

export default IconMaterialMountainFlagW100Filled;
