import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGarageDoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GarageDoorW100Filled'

      short_name='GarageDoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M354-436h252q5.95 0 9.975 4.035 4.025 4.035 4.025 10T615.975-412q-4.025 4-9.975 4H354q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4Zm0 124h252q5.95 0 9.975 4.035 4.025 4.035 4.025 10T615.975-288q-4.025 4-9.975 4H354q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4Zm0 124h252q5.95 0 9.975 4.035 4.025 4.035 4.025 10T615.975-164q-4.025 4-9.975 4H354q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4Zm-102 14v-318h-59q-10.5 0-14.25-9.5T183-518l258-221q7.7-7.7 17.85-10.85Q469-753 480-753q11 0 21.15 3.15Q511.3-746.7 519-739l258 221q8 7 4.25 16.5T767-492h-59v318q0 5.95-4.035 9.975-4.035 4.025-10 4.025T684-164.025q-4-4.025-4-9.975v-358H280v358q0 5.95-4.035 9.975-4.035 4.025-10 4.025T256-164.025q-4-4.025-4-9.975Z"/>
    </Icon>
  );
});

IconMaterialGarageDoorW100Filled.displayName = 'AmauiIconMaterialGarageDoorW100Filled';

export default IconMaterialGarageDoorW100Filled;
