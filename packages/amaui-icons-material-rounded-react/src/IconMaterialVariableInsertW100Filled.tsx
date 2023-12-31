import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVariableInsertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VariableInsertW100Filled'

      short_name='VariableInsert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M202-332q-12.75 0-21.375-8.511-8.625-8.51-8.625-21.091v-236.817q0-12.581 8.625-21.081T202-628h556q12.75 0 21.375 8.481Q788-611.037 788-598.5v88.5H650q-24.75 0-42.375 17.625T590-450v118H202Zm516-30v116q0 5.95-4.035 9.975-4.035 4.025-10 4.025T694-236.025q-4-4.025-4-9.975v-134.182q0-12.673 8.573-21.245Q707.145-410 719.818-410H854q5.95 0 9.975 4.035 4.025 4.035 4.025 10T863.975-386q-4.025 4-9.975 4H738l140 142q4 3.733 4 8.867 0 5.133-4 9.133-4 4-9.5 4t-9.5-4L718-362Z"/>
    </Icon>
  );
});

IconMaterialVariableInsertW100Filled.displayName = 'AmauiIconMaterialVariableInsertW100Filled';

export default IconMaterialVariableInsertW100Filled;
