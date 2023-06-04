import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhysicalTherapyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhysicalTherapyW100Filled'

      short_name='PhysicalTherapy'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M566 844q8 3 16 2.5t14-5.5q6-5 10-12t4-15.363v-91.228q0-12.924-8.625-21.666Q592.75 692 580 692H365q-14.218 0-23.182 8.826Q332.855 709.652 331 721q-2 11 3 22.5t19 16.5l213 84Zm183-288q15.93 0 27.465 10.897T788 594q0 14-7.854 23.913T759 632l-121 32H365q-26 0-44.5 18.5T302 727q0 21 14.5 37.5T352 789l58 23H202q-12.75 0-21.375-8.625T172 782v-78q0-62 43-105t105-43h429ZM400 280q44.55 0 76.275 31.725Q508 343.45 508 388q0 44.55-31.725 76.275Q444.55 496 400 496q-44.55 0-76.275-31.725Q292 432.55 292 388q0-44.55 31.725-76.275Q355.45 280 400 280Z"/>
    </Icon>
  );
});

IconMaterialPhysicalTherapyW100Filled.displayName = 'AmauiIconMaterialPhysicalTherapyW100Filled';

export default IconMaterialPhysicalTherapyW100Filled;
