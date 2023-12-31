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
      <path d="M188-172v-28h104v-186h-52v-28h52q0-71 51-120t123-54v-156h180v100H494v56q72 5 123 54t51 120h52v28h-52v186h104v28H188Zm132-28h146v-186H320v186Zm174 0h146v-186H494v186Z"/>
    </Icon>
  );
});

IconMaterialThingsToDoW100Filled.displayName = 'AmauiIconMaterialThingsToDoW100Filled';

export default IconMaterialThingsToDoW100Filled;
