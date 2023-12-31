import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHallwayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HallwayW100Filled'

      short_name='Hallway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-132v-616h194l114-114 114 114h194v616H172Zm146-134h332L548-402 448-278l-64-74-66 86Zm88-482h148l-74-74-74 74Z"/>
    </Icon>
  );
});

IconMaterialHallwayW100Filled.displayName = 'AmauiIconMaterialHallwayW100Filled';

export default IconMaterialHallwayW100Filled;
