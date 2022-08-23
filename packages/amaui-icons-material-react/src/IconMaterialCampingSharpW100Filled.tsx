import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCampingSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampingSharpW100Filled'
      short_name='Camping'

      {...props}
    >
      <path d="M3.3 21.35v-3.6l8.275-11.125-.95-1.25.575-.425.8 1.1.825-1.1.55.425-.925 1.25L20.7 17.75v3.6Zm4.475-.7h8.45L12 14.725Z"/>
    </Icon>
  );
});

IconMaterialCampingSharpW100Filled.displayName = 'AmauiIconMaterialCampingSharpW100Filled';

export default IconMaterialCampingSharpW100Filled;
