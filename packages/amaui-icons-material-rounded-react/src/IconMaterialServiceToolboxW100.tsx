import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialServiceToolboxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ServiceToolboxW100'

      short_name='ServiceToolbox'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M342-668v-48q0-11 8.5-19.5T370-744h220q11 0 19.5 8.5T618-716v48h90q7.667 0 14.333 4Q729-660 732-652l88 198q4 9.5 6 19t2 19v176q0 11-8.5 19.5T800-212H160q-11 0-19.5-8.5T132-240v-176q0-9.5 2-19t6-19l88-198q3-8 9.667-12 6.666-4 14.333-4h90Zm28 0h220v-48H370v48Zm-64 224v-27q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v27h292v-27q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v27h140l-86-196H252l-86 196h140Zm0 28H160v176h640v-176H654v27q0 5.95-4.035 9.975-4.035 4.025-10 4.025T630-379.025q-4-4.025-4-9.975v-27H334v27q0 5.95-4.035 9.975-4.035 4.025-10 4.025T310-379.025q-4-4.025-4-9.975v-27Zm174-14Zm0-14Zm0 28Z"/>
    </Icon>
  );
});

IconMaterialServiceToolboxW100.displayName = 'AmauiIconMaterialServiceToolboxW100';

export default IconMaterialServiceToolboxW100;
