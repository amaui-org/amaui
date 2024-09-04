import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddDiamondW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddDiamondW100'

      short_name='AddDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-466v112q0 6 4 10t10 4q6 0 10-4t4-10v-112h112q6 0 10-4t4-10q0-6-4-10t-10-4H494v-112q0-6-4-10t-10-4q-6 0-10 4t-4 10v112H354q-6 0-10 4t-4 10q0 6 4 10t10 4h112Zm14 334q-12 0-23-4.5T436-150L150-436q-9-10-13.5-21t-4.5-23q0-11 4.5-22.5T150-523l286-286q10-10 21-14.5t23-4.5q11 0 22.5 4.5T523-809l286 286q10 9 14.5 20.5T828-480q0 12-4.5 23T809-436L523-150q-9 9-20.5 13.5T480-132Zm24-38 285-285q9-9 9-24.5t-9-24.5L504-789q-9-9-24.5-9t-24.5 9L170-504q-8 9-8 24.5t8 24.5l285 285q9 8 24.5 8t24.5-8Zm-24-310Z"/>
    </Icon>
  );
});

IconMaterialAddDiamondW100.displayName = 'AmauiIconMaterialAddDiamondW100';

export default IconMaterialAddDiamondW100;
