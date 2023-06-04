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
      <path d="M633.235 636Q600 636 576.5 612.735q-23.5-23.264-23.5-56.5Q553 523 576.265 499.5q23.264-23.5 56.5-23.5Q666 476 689.5 499.265q23.5 23.264 23.5 56.5Q713 589 689.735 612.5q-23.264 23.5-56.5 23.5ZM463 836q-12.75 0-21.375-8.625T433 806v-6q0-10.678 5.5-20.339Q444 770 453 764q41-23 85.71-35.5Q583.42 716 633 716q49.58 0 94.29 12.5Q772 741 813 764q9 6 14.5 15.661T833 800v6q0 12.75-8.625 21.375T803 836H463Zm-43-206H180q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h240q5.95 0 9.975 4.035 4.025 4.035 4.025 10T429.975 626q-4.025 4-9.975 4Zm160-320H180q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h400q5.95 0 9.975 4.035 4.025 4.035 4.025 10T589.975 306q-4.025 4-9.975 4ZM475 470H180q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h314q-5 7-10 13.5t-9 14.5Z"/>
    </Icon>
  );
});

IconMaterialPatientListW100Filled.displayName = 'AmauiIconMaterialPatientListW100Filled';

export default IconMaterialPatientListW100Filled;
