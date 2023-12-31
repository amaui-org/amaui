import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestWifiProW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiProW100'

      short_name='NestWifiPro'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.882-306Q494-306 504-315.882q10-9.883 10-24Q514-354 504.118-364q-9.883-10-24-10Q466-374 456-364.118q-10 9.883-10 24Q446-326 455.882-316q9.883 10 24 10ZM360-132q-60.339 0-97.17-37.5Q226-207 206-260.554 186-315 179-374.5T172-479q0-86 13.347-150.815T234-739q35.01-44.949 93.929-66.975Q386.849-828 479.924-828q93.076 0 152.054 22.025Q690.955-783.949 726-739q35.306 44.37 48.653 109.185Q788-565 788-479q0 45-7 104.5t-27 113.946Q734-207 697.17-169.5 660.339-132 600-132H360Zm-1-28h240q51 0 82.5-36t48.5-87q17-51 22.5-104.758Q758-441.517 758-479q0-80-11-140t-42-100q-32-41-86-61t-140-20q-86 0-140 20t-86 61q-31 40-42 100t-11 140q0 37.483 5.5 91.242Q211-334 228-283q17 51 48.5 87t82.5 36Zm120-320Z"/>
    </Icon>
  );
});

IconMaterialNestWifiProW100.displayName = 'AmauiIconMaterialNestWifiProW100';

export default IconMaterialNestWifiProW100;
