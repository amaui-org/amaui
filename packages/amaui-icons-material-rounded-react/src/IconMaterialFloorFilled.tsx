import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloorFilled'

      short_name='Floor'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M260 896V756q0-17 11.5-28.5T300 716h140V576q0-17 11.5-28.5T480 536h140V396q0-17 11.5-28.5T660 356h140V256q0-17 11.5-28.5T840 216q17 0 28.5 11.5T880 256v140q0 17-11.5 28.5T840 436H700v140q0 17-11.5 28.5T660 616H520v140q0 17-11.5 28.5T480 796H340v140q0 17-11.5 28.5T300 976H160q-17 0-28.5-11.5T120 936q0-17 11.5-28.5T160 896h100Z"/>
    </Icon>
  );
});

IconMaterialFloorFilled.displayName = 'AmauiIconMaterialFloorFilled';

export default IconMaterialFloorFilled;
