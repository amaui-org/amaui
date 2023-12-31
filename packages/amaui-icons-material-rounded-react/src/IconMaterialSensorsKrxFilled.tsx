import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorsKrxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsKrxFilled'

      short_name='SensorsKrx'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M203-280q-11 0-20.5-5.5T168-300q-24-42-36-87t-12-93q0-48 12-93t36-87q5-9 14.5-14.5T203-680q17 0 28.5 11.5T243-640q0 5-1.5 10t-4.5 10q-18 32-27.5 67.5T200-480q0 37 9.5 72.5T237-340q3 5 4.5 10t1.5 10q0 17-11.5 28.5T203-280Zm277 0q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280Zm277 0q-17 0-28.5-11.5T717-320q0-3 6-20 18-32 27.5-67.5T760-480q0-37-9.5-72.5T723-620q-3-5-4.5-10t-1.5-10q0-17 11.5-28.5T757-680q11 0 20.5 5.5T792-660q24 42 36 87t12 93q0 48-12 93t-36 87q-5 9-14.5 14.5T757-280Z"/>
    </Icon>
  );
});

IconMaterialSensorsKrxFilled.displayName = 'AmauiIconMaterialSensorsKrxFilled';

export default IconMaterialSensorsKrxFilled;
