import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveExportW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveExportW100Filled'

      short_name='DriveExport'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M826-326 686-187q-4 4-9.5 4t-9.5-4q-4-4-4-9.5t4-9.5l139-140H680q-6 0-10-4t-4-10q0-6 4-10t10-4h144q13 0 21.5 8.5T854-344v144q0 6-4 10t-10 4q-6 0-10-4t-4-10v-126ZM240.5-152q-13.14 0-26.29-7.5Q201.07-167 195-178l-80-140q-6-11-6.5-26t6.5-26l240-412q7-11 19.5-18.5T400-808h160q13 0 25.5 7.5T605-782l140.85 241.84q4.15 7.16.89 13.16-3.25 6-11.74 7-4 0-7.5-1t-5.53-5.11L574-780H386L132-344l94 164h308q4 0 7 1.5t5 5.5q4 7 0 14t-12 7H240.5ZM317-306q-5 0-10.5-2.5T299-316q-4-7-4-15t4-15l157-273q4-7 11-11t15-4q6 0 11 3t8.12 8.1l90.78 156.47q2.1 4.12 1.6 8.78Q593-453 590-449q-5 5-12 4t-11.16-7.31L480-604 325-334h184q7 0 11.5 4.5T523-318q-1 5-5 8.5t-9.02 3.5H317Z"/>
    </Icon>
  );
});

IconMaterialDriveExportW100Filled.displayName = 'AmauiIconMaterialDriveExportW100Filled';

export default IconMaterialDriveExportW100Filled;
