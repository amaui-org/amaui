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
      <path d="M852 988 705 841q-46 39-103 61t-122 22q-72.21 0-135.72-27.405-63.51-27.405-110.49-74.385-46.98-46.98-74.385-110.49Q132 648.21 132 576q0-65 22-122t61-103L90 226l20-20 762 762-20 20ZM480 796q22.792 0 43.896-4.5T565 779q-64-26-101.5-85T430 566L305 441q-22 28-33.5 62.5T260 576q0 91.667 64.167 155.833Q388.333 796 480 796Zm296-36L468 452q17.699-25.756 42.849-45.878Q536 386 565 373q-20-8-41.19-12.5-21.191-4.5-44.077-4.5-23.733 0-46.132 4.957Q411.203 365.913 391 375l-95-95q40.145-24.8 86.564-38.4Q428.982 228 480 228q72.21 0 135.72 27.405 63.51 27.405 110.49 74.385 46.98 46.98 74.385 110.49Q828 503.79 828 576q0 51.018-13.6 97.436Q800.8 719.855 776 760Z"/>
    </Icon>
  );
});

IconMaterialNightlightOffW100Filled.displayName = 'AmauiIconMaterialNightlightOffW100Filled';

export default IconMaterialNightlightOffW100Filled;
