import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMenstrualHealthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenstrualHealthW100Filled'

      short_name='MenstrualHealth'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 300v276q0 109 59.5 195T345 897q-48-32-77.5-85T238 696q0-46 23.5-110T328 447L132 300Zm348-26q-97 117-155.5 232T266 696q0 89 62.5 151.5T480 910q89 0 151.5-62.5T694 696q0-75-58.5-190.5T480 274Zm348 26L632 447q42 74 66 138.5T722 696q0 63-29.5 116T615 897q94-40 153.5-126T828 576V300Z"/>
    </Icon>
  );
});

IconMaterialMenstrualHealthW100Filled.displayName = 'AmauiIconMaterialMenstrualHealthW100Filled';

export default IconMaterialMenstrualHealthW100Filled;
