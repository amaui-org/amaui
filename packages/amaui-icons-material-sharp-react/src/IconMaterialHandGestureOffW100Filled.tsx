import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandGestureOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandGestureOffW100Filled'

      short_name='HandGestureOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-711-28-28v-20h28v48Zm143 143-28-28v-243h28v271Zm151 450H457q-23 0-43-12t-35-29L154-416l34-34 144 81v-219L90-830l20-20L872-88l-20 20-97-97q-19 21-44.5 34T654-118Zm195-609q0-42-29.5-71.5T748-828v-28q54 0 91.5 37.5T877-727h-28ZM243-104q-58 0-98.5-40.5T104-243h28q0 46 32.5 78.5T243-132v28Zm545-179L565-506h53v-293h28v293h114v-242h28v465Z"/>
    </Icon>
  );
});

IconMaterialHandGestureOffW100Filled.displayName = 'AmauiIconMaterialHandGestureOffW100Filled';

export default IconMaterialHandGestureOffW100Filled;
