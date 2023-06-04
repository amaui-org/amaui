import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOxygenSaturationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OxygenSaturationW100Filled'

      short_name='OxygenSaturation'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 611q-47-8-77.5-45T172 480q0-56 39-94.5t95-38.5h34q14 0 23-9t9-23v-98q0-13 8.5-21.5T402 187h156q13 0 21.5 8.5T588 217v98q0 14 9 23t23 9h34q56 0 95 38.5t39 94.5q0 49-30.5 86T680 611H579q5-7 9-14.5t7-15.5q7-20 24.5-32.5T658 536h22v-28h-22q-30 0-54.5 17.5T569 572q-4 12-11 21.5T541 611H419q-10-8-17-17.5T391 572q-10-29-34.5-46.5T302 508h-22v28h22q21 0 38.5 12.5T365 581q3 8 7 15.5t9 14.5H280Zm30 313q-18 0-31-11.5T266 884h-80q-39 0-66.5-27.5T92 790V670q0-6 4-10t10-4q6 0 10 4t4 10v120q0 27 19.5 46.5T186 856h80q0-17 13-28.5t31-11.5h76v-66q0-6 4-10t10-4q6 0 10 4t4 10v66h132v-66q0-6 4-10t10-4q6 0 10 4t4 10v66h76q18 0 31 11.5t13 28.5h81q27 0 46.5-19.5T841 790V670q0-6 4-10t10-4q6 0 10 4t4 10v120q0 39-27.5 66.5T775 884h-81q0 17-13 28.5T650 924H310Z"/>
    </Icon>
  );
});

IconMaterialOxygenSaturationW100Filled.displayName = 'AmauiIconMaterialOxygenSaturationW100Filled';

export default IconMaterialOxygenSaturationW100Filled;
