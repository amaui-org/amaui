import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScooterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScooterW100Filled'

      short_name='Scooter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M738.75-241Q765-241 783-258.55q18-17.56 18-43.5Q801-328 783.25-346q-17.76-18-44-18Q713-364 695-346.25q-18 17.76-18 44 0 26.25 17.75 43.75 17.76 17.5 44 17.5Zm.25 29q-37.5 0-63.75-26.25T649-302q0-37.5 26.15-63.75Q701.29-392 738.65-392 776-392 802-365.75T828-302q0 37.5-25.96 63.75T739-212Zm-516.25-29q26.25 0 43.75-17.55 17.5-17.56 17.5-43.5Q284-328 266.45-346q-17.56-18-43.5-18Q197-364 179-346.25q-18 17.76-18 44 0 26.25 17.75 43.75 17.76 17.5 44 17.5Zm.25 29q-37.92 0-64.46-26.25Q132-264.5 132-302t26.54-63.75Q185.08-392 223-392q34 0 58.5 22.5T311-314h236q6-67 53-114.5T713-482l-58-257q-2-10-10-15.5t-18-5.5H509v-28h116.32q20.87 0 37.28 13.5Q679-761 684-741l63 285h-8q-67 0-115.5 45.5T575-299v13H311q-6 32-31 53t-57 21Z"/>
    </Icon>
  );
});

IconMaterialScooterW100Filled.displayName = 'AmauiIconMaterialScooterW100Filled';

export default IconMaterialScooterW100Filled;
