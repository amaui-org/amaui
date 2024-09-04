import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRailwayAlert2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RailwayAlert2Filled'

      short_name='RailwayAlert2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M128-80q-14 0-19-12t5-22l46-46h480l46 46q10 10 5 22t-19 12H128Zm552-400q-83 0-141.5-58.5T480-680q0-83 58.5-141.5T680-880q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm0-160q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM200-200l40-40h-20q-58 0-99-41t-41-99v-260q0-122 96-201t224-79q13 0 25.5.5T451-917q18 2 24 20.5t-8 32.5q-26 31-43 67.5T402-720H177q-9 19-13 39t-4 41v40h252q13 43 38.5 79.5T512-457q35 27 77.5 41.5T677-400q19 0 31 13t10 30q-8 51-47.5 84T580-240h-20l40 40H200Zm200-160q25 0 42.5-17.5T460-420q0-25-17.5-42.5T400-480q-25 0-42.5 17.5T340-420q0 25 17.5 42.5T400-360Z"/>
    </Icon>
  );
});

IconMaterialRailwayAlert2Filled.displayName = 'AmauiIconMaterialRailwayAlert2Filled';

export default IconMaterialRailwayAlert2Filled;
