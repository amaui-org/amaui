import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCampingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampingW100'

      short_name='Camping'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 21.35v-3.6l8.275-11.125-.95-1.25.575-.425.8 1.1.825-1.1.55.425-.925 1.25L20.7 17.75v3.6ZM12 7.225l-8 10.75v2.675h3.325L12 14.125l4.675 6.525H20v-2.675ZM8.2 20.65h7.6L12 15.325Zm3.8-6.525 4.675 6.525L12 14.125 7.325 20.65Z"/>
    </Icon>
  );
});

IconMaterialCampingW100.displayName = 'AmauiIconMaterialCampingW100';

export default IconMaterialCampingW100;
