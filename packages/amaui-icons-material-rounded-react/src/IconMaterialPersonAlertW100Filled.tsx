import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAlertW100Filled'

      short_name='PersonAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M800.035-534Q789-534 781.5-541.465t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5Zm-.07-132Q794-666 790-670.025T786-680v-120q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v120q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM360-512q-44.55 0-76.275-31.725Q252-575.45 252-620q0-44.55 31.725-76.275Q315.45-728 360-728q44.55 0 76.275 31.725Q468-664.55 468-620q0 44.55-31.725 76.275Q404.55-512 360-512ZM92-262v-22q0-22 13.5-41.5T142-356q55-26 109.5-39T360-408q54 0 108.5 13T578-356q23 11 36.5 30.5T628-284v22q0 13-8.5 21.5T598-232H122q-13 0-21.5-8.5T92-262Z"/>
    </Icon>
  );
});

IconMaterialPersonAlertW100Filled.displayName = 'AmauiIconMaterialPersonAlertW100Filled';

export default IconMaterialPersonAlertW100Filled;
