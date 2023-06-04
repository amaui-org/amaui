import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLapsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LapsW100Filled'

      short_name='Laps'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m360 874-20-19 90-90h-70q-95 0-161.5-67T132 536q0-95 66.5-161.5T360 308h240q95 0 161.5 66.5T828 536q0 95-66.5 162T600 765v-28q84 0 142-58.5T800 536q0-84-58-142t-142-58H360q-84 0-142 58t-58 142q0 84 58 142.5T360 737l70-1-89-89 19-19 123 123-123 123Z"/>
    </Icon>
  );
});

IconMaterialLapsW100Filled.displayName = 'AmauiIconMaterialLapsW100Filled';

export default IconMaterialLapsW100Filled;
