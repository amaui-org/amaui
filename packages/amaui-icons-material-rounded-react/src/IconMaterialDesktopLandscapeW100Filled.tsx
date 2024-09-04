import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopLandscapeW100Filled'

      short_name='DesktopLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M290-340h272q12.75 0 21.38-8.63Q592-357.25 592-370v-112q0-12.75-8.62-21.38Q574.75-512 562-512H290q-12.75 0-21.37 8.62Q260-494.75 260-482v112q0 12.75 8.63 21.37Q277.25-340 290-340Zm70-266.05q0 6.05 3.97 10.05 3.96 4 10.03 4h268q6.18 0 11.59 2.5T663-583q4 4 6.5 9.41T672-562v96q0 6.07 3.95 10.03 3.96 3.97 10 3.97 6.05 0 10.05-3.97 4-3.96 4-10.03v-96q0-23.92-17.04-40.96T642-620H374q-6.07 0-10.03 3.95-3.97 3.96-3.97 10ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialDesktopLandscapeW100Filled.displayName = 'AmauiIconMaterialDesktopLandscapeW100Filled';

export default IconMaterialDesktopLandscapeW100Filled;
