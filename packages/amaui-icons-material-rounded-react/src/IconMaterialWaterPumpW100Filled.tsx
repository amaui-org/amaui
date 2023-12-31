import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterPumpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPumpW100Filled'

      short_name='WaterPump'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.944-397Q511-397 532.5-418.5 554-440 554-469.806q0-14.194-5.431-27.408Q543.138-510.429 533-521l-32.126-30.906Q491.908-560 479.954-560q-11.954 0-20.899 8.094L427-521q-11 10-16 23.5t-5 27.694Q406-440 427.444-418.5q21.443 21.5 52.5 21.5Zm-.051 145Q385-252 318.5-318.607q-66.5-66.608-66.5-161.5Q252-575 318.607-641.5q66.608-66.5 161.5-66.5Q575-708 641.5-641.393q66.5 66.608 66.5 161.5Q708-385 641.393-318.5q-66.608 66.5-161.5 66.5ZM814-532v-14h-87q-14-53-47.5-95T597-708h217v-14q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v190q0 5.95-4.035 9.975-4.035 4.025-10 4.025T818-522.025q-4-4.025-4-9.975ZM118-238v-190q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v14h87q14 53 47.5 95t82.5 67H146v14q0 5.95-4.035 9.975-4.035 4.025-10 4.025T122-228.025q-4-4.025-4-9.975Z"/>
    </Icon>
  );
});

IconMaterialWaterPumpW100Filled.displayName = 'AmauiIconMaterialWaterPumpW100Filled';

export default IconMaterialWaterPumpW100Filled;
