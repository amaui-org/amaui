import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopLandscapeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopLandscapeW100'

      short_name='DesktopLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M290-340h272q13 0 21.5-8.5T592-370v-112q0-13-8.5-21.5T562-512H290q-13 0-21.5 8.5T260-482v112q0 13 8.5 21.5T290-340Zm70-266q0 6 4 10t10 4h268q6 0 11.5 2.5t9.5 6.5q4 4 6.5 9.5T672-562v96q0 6 4 10t10 4q6 0 10-4t4-10v-96q0-24-17-41t-41-17H374q-6 0-10 4t-4 10ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialDesktopLandscapeW100.displayName = 'AmauiIconMaterialDesktopLandscapeW100';

export default IconMaterialDesktopLandscapeW100;
