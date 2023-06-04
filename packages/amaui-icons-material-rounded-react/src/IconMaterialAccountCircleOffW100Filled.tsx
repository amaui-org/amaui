import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountCircleOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountCircleOffW100Filled'

      short_name='AccountCircleOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 896q57 0 109.5-19.5T685 821l-73-73q-32-13-64.5-19.5T480 722q-62 0-119.5 21.5T252 800q45 46 104 71t124 25Zm362 82L706 842q-48 40-105.5 61T480 924q-72 0-135.5-27.5T234 822q-47-47-74.5-110.5T132 576q0-62 20.5-119.5T214 351L100 236q-4-4-4.5-9.5T100 216q5-5 10-5t10 5l742 742q4 4 4.5 9.5T862 978q-5 5-10 5t-10-5Zm-66-217L566 551q14-16 21-35t7-40q0-48-33-81t-81-33q-21 0-40 7t-35 21L295 280q42-26 89-39t96-13q72 0 135.5 27.5T726 330q47 47 74.5 110.5T828 576q0 49-13 96t-39 89Z"/>
    </Icon>
  );
});

IconMaterialAccountCircleOffW100Filled.displayName = 'AmauiIconMaterialAccountCircleOffW100Filled';

export default IconMaterialAccountCircleOffW100Filled;
