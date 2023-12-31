import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxAddW100Filled'

      short_name='BoxAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-24.75 0-42.375-17.625T172-232v-417q0-10.5 3.5-20.25T186-687l66-79q8-10.621 20-16.31 12-5.69 26.153-5.69h361.694q14.153 0 26.528 5.69Q698.75-776.621 707-766l67 81q7 8.412 10.5 18.353T788-646v137q-5-1-11-1h-11q-52 0-98 21.5T588-428v-222H372v208q0 17.5 14 26.25t29 .75l65-32 89 44q-18 28-28 60.609-10 32.608-10 67.391 0 27 6 53t18 50H232Zm519-89H645q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h106v-106q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v106h106q5.95 0 9.975 4.035 4.025 4.035 4.025 10T894.975-265q-4.025 4-9.975 4H779v106q0 5.95-4.035 9.975-4.035 4.025-10 4.025T755-145.025q-4-4.025-4-9.975v-106ZM215-678h529l-59-71q-5-5-11.5-8t-13.5-3H299q-7 0-13.5 3t-11.5 8l-59 71Z"/>
    </Icon>
  );
});

IconMaterialBoxAddW100Filled.displayName = 'AmauiIconMaterialBoxAddW100Filled';

export default IconMaterialBoxAddW100Filled;
