import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCampingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampingW100Filled'

      short_name='Camping'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 21.35v-3.6l8.275-11.125-.95-1.25.575-.425.8 1.1.825-1.1.55.425-.925 1.25L20.7 17.75v3.6Zm4.475-.7h8.45L12 14.725Z"/>
    </Icon>
  );
});

IconMaterialCampingW100Filled.displayName = 'AmauiIconMaterialCampingW100Filled';

export default IconMaterialCampingW100Filled;
