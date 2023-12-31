import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThingsToDoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThingsToDoW100Filled'

      short_name='ThingsToDo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M292-200v-186h-38q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h38q0-71 51-120t123-54v-125.945q0-13.055 8.625-21.555T496-744h120q12.75 0 21.375 8.625T646-714v40q0 12.75-8.74 21.375T615.6-644H494v56q72 5 123 54t51 120h38q5.95 0 9.975 4.035 4.025 4.035 4.025 10T715.975-390q-4.025 4-9.975 4h-38v186h90q5.95 0 9.975 4.035 4.025 4.035 4.025 10T767.975-176q-4.025 4-9.975 4H202q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h90Zm28 0h146v-186H320v186Zm174 0h146v-186H494v186Z"/>
    </Icon>
  );
});

IconMaterialThingsToDoW100Filled.displayName = 'AmauiIconMaterialThingsToDoW100Filled';

export default IconMaterialThingsToDoW100Filled;
