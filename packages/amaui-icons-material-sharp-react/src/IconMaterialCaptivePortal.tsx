import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCaptivePortal = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CaptivePortal'

      short_name='CaptivePortal'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M376 878q-18-33-31.5-68.5T322 736H204q29 50 72.5 87t99.5 55ZM170 656h136q-3-20-4.5-39.5T300 576q0-21 1.5-40.5T306 496H170q-5 20-7.5 39.5T160 576q0 21 2.5 40.5T170 656Zm34-240h118q9-38 22.5-73.5T376 274q-56 18-99.5 55T204 416Zm200 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm234 0h118q-29-50-72.5-87T584 274q18 33 31.5 68.5T638 416ZM480 976q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-83 31.5-155.5t86-127Q252 239 325 207.5T480 176q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880 576q0 10-.5 20t-1.5 20h-81q2-10 2.5-19.5t.5-20.5q0-21-2.5-40.5T790 496H654q3 20 4.5 39.5T660 576v20.5q0 9.5-1 19.5h-80q1-10 1-19.5V576q0-21-1.5-40.5T574 496H386q-3 20-4.5 39.5T380 576q0 21 1.5 40.5T386 656h134v80H404q12 44 31 83t45 75q11-16 21-32.5t19-33.5v146q-10 1-19.5 1.5t-20.5.5Zm318-25L680 833v89h-80V696h226v80h-90l118 118-56 57Z"/>
    </Icon>
  );
});

IconMaterialCaptivePortal.displayName = 'AmauiIconMaterialCaptivePortal';

export default IconMaterialCaptivePortal;
