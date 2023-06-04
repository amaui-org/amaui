import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOxygenSaturationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OxygenSaturationW100'

      short_name='OxygenSaturation'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M92 656h28v134q0 27 19.5 46.5T186 856h80v-40h120v-80h28v80h132v-80h28v80h120v40h81q27 0 46.5-19.5T841 790V656h28v134q0 39.167-27.417 66.583Q814.167 884 775 884h-81v40H266v-40h-80q-39.167 0-66.583-27.417Q92 829.167 92 790V656Zm280-469h28v188h-94q-45 0-75.5 30.5T200 480q0 37 23 65.5t57 37.5v28q-47-8-77.5-45T172 480q0-56 39-94.5t95-38.5h66V187Zm188 0h28v160h66q56 0 95 38.5t39 94.5q0 49-30.5 86T680 611v-28q34-9 57-37.5t23-65.5q0-44-30.5-74.5T654 375h-94V187Zm-80 424Zm-11 45q-35.473 0-64.093-20.565Q376.287 614.871 365 581q-7-20-24.5-32.5T302 536h-22v-28h22q30.206 0 54.603 17.5Q381 543 391 572q8 25 29.875 40.5T469 628h22q26.25 0 48.125-15.5T569 572q10-29 34.397-46.5T658 508h22v28h-22q-21 0-38.64 12.5T595 581q-11.287 33.871-39.907 54.435Q526.473 656 491 656h-22Z"/>
    </Icon>
  );
});

IconMaterialOxygenSaturationW100.displayName = 'AmauiIconMaterialOxygenSaturationW100';

export default IconMaterialOxygenSaturationW100;
