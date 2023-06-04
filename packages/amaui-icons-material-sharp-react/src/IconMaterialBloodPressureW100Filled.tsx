import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBloodPressureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BloodPressureW100Filled'

      short_name='BloodPressure'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M680 924q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm8-137 73-72-20-20-72 73 19 19ZM132 562V308h696v269q-32-24-70-36.5T680 528q-41 0-77.5 12T535 575l-83-165q-2-3-5-4.5t-7-1.5q-4 0-7.5 1.5T427 410L280 705l-68-135q-2-4-5-6t-7-2h-68Zm0 282V590h59l76 153q2 4 5 5.5t8 1.5q4 0 7-1.5t5-5.5l147-295 73 146q-37 34-58.5 81T432 776q0 17 2 34t7 34H132Z"/>
    </Icon>
  );
});

IconMaterialBloodPressureW100Filled.displayName = 'AmauiIconMaterialBloodPressureW100Filled';

export default IconMaterialBloodPressureW100Filled;
