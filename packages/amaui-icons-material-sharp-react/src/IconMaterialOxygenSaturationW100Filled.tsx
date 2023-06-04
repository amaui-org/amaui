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
      <path d="M92 656h28v134q0 27 19.5 46.5T186 856h80v-40h120v-66h28v66h132v-66h28v66h120v40h81q27 0 46.5-19.5T841 790V656h28v134q0 39-27.5 66.5T775 884h-81v40H266v-40h-80q-39 0-66.5-27.5T92 790V656Zm188-45q-47-8-77.5-45T172 480q0-56 39-94.5t95-38.5h34q14 0 23-9t9-23V187h216v128q0 14 9 23t23 9h34q56 0 95 38.5t39 94.5q0 49-30.5 86T680 611H579q5-7 9-14.5t7-15.5q7-20 24.5-32.5T658 536h22v-28h-22q-30 0-54.5 17.5T569 572q-4 12-11 21.5T541 611H419q-10-8-17-17.5T391 572q-10-29-34.5-46.5T302 508h-22v28h22q21 0 38.5 12.5T365 581q3 8 7 15.5t9 14.5H280Z"/>
    </Icon>
  );
});

IconMaterialOxygenSaturationW100Filled.displayName = 'AmauiIconMaterialOxygenSaturationW100Filled';

export default IconMaterialOxygenSaturationW100Filled;
