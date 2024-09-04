import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopLandscapeAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopLandscapeAddW100Filled'

      short_name='DesktopLandscapeAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v212q0 14-11 21.5t-24 2.5q-14-4-29-6t-30.2-2q-8.8 0-17.13.5-8.34.5-16.67 2.5v-105q0-23.92-17.04-40.96T642-620H374q-6.07 0-10.03 3.95-3.97 3.96-3.97 10 0 6.05 3.97 10.05 3.96 4 10.03 4h268q13 0 21.5 8.5T672-562v111q-23 7-43 18.5T592-406v-76q0-12.75-8.62-21.38Q574.75-512 562-512H290q-12.75 0-21.37 8.62Q260-494.75 260-482v112q0 12.75 8.63 21.37Q277.25-340 290-340h252q-12 24-17.5 50t-4.5 52q1 11-5.75 18.5T497-212H192Zm528-20h-86q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h86v-86q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v86h86q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-86v86q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-86Z"/>
    </Icon>
  );
});

IconMaterialDesktopLandscapeAddW100Filled.displayName = 'AmauiIconMaterialDesktopLandscapeAddW100Filled';

export default IconMaterialDesktopLandscapeAddW100Filled;
