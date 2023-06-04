import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightlightOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightOffW100Filled'

      short_name='NightlightOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M842 978 705 841q-46 39-103 61t-122 22q-72 0-135.5-27.5T234 822q-47-47-74.5-110.5T132 576q0-65 22-122t61-103L100 236q-4-4-4.5-9.5T100 216q5-5 10-5t10 5l742 742q4 4 4.5 9.5T862 978q-5 5-10 5t-10-5ZM260 576q0 92 64 156t156 64q12 0 24-1.5t23-3.5q5-1 11-13 1-5-1-10t-7-8q-49-32-76-83.5T430 566L305 441q-22 28-33.5 62.5T260 576Zm516 184L468 452q15-23 33-39t29-21q5-4 7-8.5t1-9.5q-1-5-3.5-8.5T527 361q-11-2-23-3.5t-24-1.5q-24 0-46.5 5T391 375l-95-95q40-25 86.5-38.5T480 228q72 0 135.5 27.5T726 330q47 47 74.5 110.5T828 576q0 51-13.5 97.5T776 760Z"/>
    </Icon>
  );
});

IconMaterialNightlightOffW100Filled.displayName = 'AmauiIconMaterialNightlightOffW100Filled';

export default IconMaterialNightlightOffW100Filled;
