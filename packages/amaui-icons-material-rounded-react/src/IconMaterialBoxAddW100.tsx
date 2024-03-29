import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoxAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoxAddW100'

      short_name='BoxAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-650h369-38 12-343Zm388 0h172-172Zm-373-28h529l-59-71q-5-5-11.5-8t-13.5-3H299q-7 0-13.5 3t-11.5 8l-59 71Zm185 239 80-40 80 40v-211H400v211Zm155 267H232q-24.75 0-42.375-17.625T172-232v-417q0-10.5 3.5-20.25T186-687l66-79q8-10.621 20-16.31 12-5.69 26.153-5.69h361.694q14.153 0 26.528 5.69Q698.75-776.621 707-766l67 81q7 8.412 10.5 18.353T788-646v137q-5-1-11-1h-17v-140H588v222q-4 4-10.5 12t-8.5 13l-89-44-65 32q-15 8-29-.75T372-442v-208H200v418q0 14 9 23t23 9h311q2.25 7.667 5.625 14.333Q552-179 555-172Zm209.965 31Q759-141 755-145.025T751-155v-106H645q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h106v-106q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v106h106q5.95 0 9.975 4.035 4.025 4.035 4.025 10T894.975-265q-4.025 4-9.975 4H779v106q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM200-650h369-38 12-343Z"/>
    </Icon>
  );
});

IconMaterialBoxAddW100.displayName = 'AmauiIconMaterialBoxAddW100';

export default IconMaterialBoxAddW100;
