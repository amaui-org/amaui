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
      <path d="M480 616q-27 0-45.5-18.5T416 552v-6q-8 6-16.5 9t-19.5 3q-27 0-45.5-18.5T316 494q0-20 10.5-35t27.5-23q-17-8-27.5-23T316 378q0-27 18.5-45.5T380 314q11 0 19.5 3t16.5 9v-6q0-29 18.5-46.5T480 256q27 0 45.5 17.5T544 320v6q9-7 19.5-10t21.5-2l-25 62q-14-18-34.5-29T480 336q-42 0-71 29t-29 71q0 42 29 71t71 29q14 0 26-3.5t23-9.5q7 9 17 14.5t23 5.5h53q-8 7-19 11t-23 4q-11 0-19.5-3t-16.5-9v6q0 27-18.5 45.5T480 616Zm104-133 96-245h14l98 245h-28l-30-72h-95l-28 72h-27Zm66-96h74l-36-95h-2l-36 95ZM480 916q0-51 24.5-101t64.5-90q40-40 90-64.5T760 636q0 51-24.5 101T671 827q-40 40-90 64.5T480 916Zm0 0q0-51-24.5-101T391 725q-40-40-90-64.5T200 636q0 51 24.5 101t64.5 90q40 40 90 64.5T480 916Z"/>
    </Icon>
  );
});

IconMaterialMacroAutoW100Filled.displayName = 'AmauiIconMaterialMacroAutoW100Filled';

export default IconMaterialMacroAutoW100Filled;
