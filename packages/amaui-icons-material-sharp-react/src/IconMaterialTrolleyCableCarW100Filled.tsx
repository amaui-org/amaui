import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTrolleyCableCarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrolleyCableCarW100Filled'

      short_name='TrolleyCableCar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M305-172v-10l70-70H172v-28h40v-440h-40v-28h147v-40h322v40h147v28h-40v440h40v28H584l70 70v10h-30l-80-80H415l-80 80h-30Zm189-360h226v-160H494v160Zm-254 0h226v-160H240v160Zm240.18 175q13.82 0 22.82-9t9-22.82q0-13.83-9-23.5-9-9.68-22.82-9.68-13.83 0-23.5 9.68-9.68 9.67-9.68 23.5 0 13.82 9.68 22.82 9.67 9 23.5 9Z"/>
    </Icon>
  );
});

IconMaterialTrolleyCableCarW100Filled.displayName = 'AmauiIconMaterialTrolleyCableCarW100Filled';

export default IconMaterialTrolleyCableCarW100Filled;
