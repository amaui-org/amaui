import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRespiratoryRateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RespiratoryRateW100Filled'

      short_name='RespiratoryRate'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M522 964q-13 0-21.5-8.5T492 934V825q0-5 1-10.5t3-10.5l45-116q3-9 11-14.5t17-5.5h69l-1 67-36 36q-4 4-4 10t4 10q4 4 9.5 4t9.5-4l46-46V576q0-6 4-10t10-4q6 0 10 4t4 10v169l45 45q4 4 10 4t10-4q4-4 4-9.5t-4-9.5l-37-37v-66h67q9 0 16.5 5.5T817 687l47 116q2 5 3 11t1 12v108q0 13-9 21.5t-21 8.5h-92q-13 0-21.5-8.5T716 934V806l-36-36-36 36v124q0 14-10 24t-24 10h-88ZM280 705l-68-135q-2-4-5-6t-7-2h-68V368q0-26 17-43t43-17h576q26 0 43 17t17 43v220h-54v-32q0-39-27.5-66.5T680 462q-39 0-66.5 27.5T586 556v32l-43 3-91-181q-2-3-5-4.5t-7-1.5q-4 0-7.5 1.5T427 410L280 705Zm-88 139q-26 0-43-17t-17-43V590h59l76 153q2 4 5 5.5t8 1.5q4 0 7-1.5t5-5.5l147-295 78 153q-17 9-30 23.5T466 658l-50 131q-2 5-3 10.5t-1 10.5v34H192Z"/>
    </Icon>
  );
});

IconMaterialRespiratoryRateW100Filled.displayName = 'AmauiIconMaterialRespiratoryRateW100Filled';

export default IconMaterialRespiratoryRateW100Filled;
