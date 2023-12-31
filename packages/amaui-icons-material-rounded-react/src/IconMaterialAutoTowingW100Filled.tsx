import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoTowingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoTowingW100Filled'

      short_name='AutoTowing'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M72-338q0-12.75 8.625-21.375T102-368h396L114-670v130q0 5.95-4.035 9.975-4.035 4.025-10 4.025T90-530.025q-4-4.025-4-9.975v-128q0-17 15-25.5t30-.5l461 256v-260q0-12.75 8.625-21.375T622-728h66q13.574 0 25.639 5.69Q725.705-716.621 734-706l140 167q6.632 8.324 10.316 18.162Q888-511 888-500.487v158.449q0 12.766-8.625 21.402Q870.75-312 858-312h-56q17 42-9 81t-73 39q-47 0-73-39t-9-81H342q17 42-9 81t-73 39q-47 0-73-39t-9-81H98q-11.05 0-18.525-7.475Q72-326.95 72-338Zm188 118q26 0 43-18t17-42q0-24-17-42t-43-18q-26 0-43 18t-17 42q0 24 17 42t43 18Zm460 0q26 0 43-18t17-42q0-24-17-42t-43-18q-26 0-43 18t-17 42q0 24 17 42t43 18ZM620-522h232L702-700h-82v178Z"/>
    </Icon>
  );
});

IconMaterialAutoTowingW100Filled.displayName = 'AmauiIconMaterialAutoTowingW100Filled';

export default IconMaterialAutoTowingW100Filled;
