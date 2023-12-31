import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForYouW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForYouW100Filled'

      short_name='ForYou'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-460q71 0 144-11.5T760-504v312q-56 23-134 37.5T480-140q-68 0-146-14.5T200-192v-312q63 21 136 32.5T480-460Zm0-360q49.5 0 84.75 35.25T600-700q0 49.5-35.25 84.75T480-580q-49.5 0-84.75-35.25T360-700q0-49.5 35.25-84.75T480-820Z"/>
    </Icon>
  );
});

IconMaterialForYouW100Filled.displayName = 'AmauiIconMaterialForYouW100Filled';

export default IconMaterialForYouW100Filled;
