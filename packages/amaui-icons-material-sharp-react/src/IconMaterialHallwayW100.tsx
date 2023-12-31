import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHallwayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HallwayW100'

      short_name='Hallway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-132v-616h194l114-114 114 114h194v616H172Zm28-28h560v-560H200v560Zm118-106h332L548-402 448-278l-64-74-66 86Zm88-482h148l-74-74-74 74ZM200-160v-560 560Z"/>
    </Icon>
  );
});

IconMaterialHallwayW100.displayName = 'AmauiIconMaterialHallwayW100';

export default IconMaterialHallwayW100;
