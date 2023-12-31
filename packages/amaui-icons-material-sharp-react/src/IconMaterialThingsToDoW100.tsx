import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThingsToDoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThingsToDoW100'

      short_name='ThingsToDo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M188-172v-28h104v-186h-52v-28h52q0-71 51-120t123-54v-156h180v100H494v56q72 5 123 54t51 120h52v28h-52v186h104v28H188Zm132-28h146v-186H320v186Zm174 0h146v-186H494v186ZM320-414h320q0-63-47.5-104.5T480-560q-65 0-112.5 41.5T320-414Zm160 0Z"/>
    </Icon>
  );
});

IconMaterialThingsToDoW100.displayName = 'AmauiIconMaterialThingsToDoW100';

export default IconMaterialThingsToDoW100;
