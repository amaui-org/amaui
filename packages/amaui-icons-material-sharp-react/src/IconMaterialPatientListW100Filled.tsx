import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPatientListW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PatientListW100Filled'

      short_name='PatientList'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M633.235 636Q600 636 576.5 612.735q-23.5-23.264-23.5-56.5Q553 523 576.265 499.5q23.264-23.5 56.5-23.5Q666 476 689.5 499.265q23.5 23.264 23.5 56.5Q713 589 689.735 612.5q-23.264 23.5-56.5 23.5ZM433 836v-36q0-10.678 5.5-20.339Q444 770 453 764q41-23 85.71-35.5Q583.42 716 633 716q49.58 0 94.29 12.5Q772 741 813 764q9 6 14.5 15.661T833 800v36H433ZM166 630v-28h268v28H166Zm0-320v-28h428v28H166Zm309 160H166v-28h328q-5 7-10 13.5t-9 14.5Z"/>
    </Icon>
  );
});

IconMaterialPatientListW100Filled.displayName = 'AmauiIconMaterialPatientListW100Filled';

export default IconMaterialPatientListW100Filled;
