import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMacroAutoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MacroAutoW100Filled'

      short_name='MacroAuto'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 616q-27 0-45.5-18.5T416 552v-6q-8 6-16.5 9t-19.5 3q-27 0-45.5-18.5T316 494q0-20 10.5-35t27.5-23q-17-8-27.5-23T316 378q0-27 18.5-45.5T380 314q11 0 19.5 3t16.5 9v-6q0-29 18.5-46.5T480 256q27 0 45.5 17.5T544 320v6q9-7 19.5-10t21.5-2l-25 62q-14-18-34.5-29T480 336q-42 0-71 29t-29 71q0 42 29 71t71 29q14 0 26-3.5t23-9.5q7 9 17 14.5t23 5.5h53q-8 7-19 11t-23 4q-11 0-19.5-3t-16.5-9v6q0 27-18.5 45.5T480 616Zm159-205-25 64q-2 4-5 6t-7 2q-7 0-10-5.5t-1-11.5l87-223q1-2 2.5-3.5t3.5-1.5h5q2 0 3.5 1.5t2.5 3.5l90 222q2 6-1 12t-11 6q-4 0-7-2t-5-6l-27-64h-95Zm11-24h74l-36-95h-2l-36 95ZM480 916q-96 0-180-78t-98-174q-2-11 6.5-19.5T228 638q96 14 174 98t78 180Zm0 0q0-96 78-180t174-98q11-2 19.5 6.5T758 664q-14 96-98 174t-180 78Z"/>
    </Icon>
  );
});

IconMaterialMacroAutoW100Filled.displayName = 'AmauiIconMaterialMacroAutoW100Filled';

export default IconMaterialMacroAutoW100Filled;
