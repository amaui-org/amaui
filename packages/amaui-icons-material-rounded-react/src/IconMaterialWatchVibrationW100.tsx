import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchVibrationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchVibrationW100'

      short_name='WatchVibration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M144-480q0-42 10-81t28-74q3-5 8.5-7t10.5 1q5 3 6.5 9t-1.5 11q-17 32-25.5 67.5T172-480q0 38 8.5 73.5T206-339q3 5 1.5 11t-6.5 9q-5 3-10.5 1t-8.5-7q-18-35-28-74t-10-81Zm672 0q0 42-10 81t-28 74q-3 5-8.5 7t-10.5-1q-5-3-6.5-9t1.5-11q17-32 25.5-67.5T788-480q0-38-8.5-73.5T754-621q-3-5-1.5-11t6.5-9q5-3 10.5-1t8.5 7q18 35 28 74t10 81ZM432-800h96-96Zm0 640h96-96Zm0 28q-10 0-17.5-6T404-154l-26-92q-5-16-15-30t-27-27q-40-31-62-77t-22-100q0-53 22-99t62-78q17-14 27-28t15-29l26-92q3-10 10.5-16t17.5-6h96q10 0 17.5 6t10.5 16l26 92q5 16 15 30t27 27q40 31 62 77t22 100q0 53-22 99t-62 78q-17 14-27 28t-15 29l-26 92q-3 10-10.5 16t-17.5 6h-96Zm48-148q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm-78-414q21-7 40-10.5t38-3.5q19 0 38 3.5t40 10.5l-30-106h-96l-30 106Zm30 534h96l30-106q-21 7-40 10t-38 3q-19 0-38-3t-40-10l30 106Z"/>
    </Icon>
  );
});

IconMaterialWatchVibrationW100.displayName = 'AmauiIconMaterialWatchVibrationW100';

export default IconMaterialWatchVibrationW100;
