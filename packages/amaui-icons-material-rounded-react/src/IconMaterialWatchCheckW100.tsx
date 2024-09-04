import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchCheckW100'

      short_name='WatchCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-429 131-132q4-4 9.5-4t10.5 4q5 4 4.5 10t-4.5 10L459-411q-9 9-21.5 9t-21.5-9l-45-45q-4-4-4.5-9.5T371-476q4-4 10-4t10 4l47 47Zm-6-371h96-96Zm0 640h96-96Zm0 28q-10 0-17.5-6T404-154l-26-92q-5-16-15-30t-27-27q-40-31-62-77t-22-100q0-53 22-99t62-78q17-14 27-28t15-29l26-92q3-10 10.5-16t17.5-6h96q10 0 17.5 6t10.5 16l26 92q5 16 15 30t27 27q40 31 62 77t22 100q0 53-22 99t-62 78q-17 14-27 28t-15 29l-26 92q-3 10-10.5 16t-17.5 6h-96Zm48-148q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm-78-414q21-7 40-10.5t38-3.5q19 0 38 3.5t40 10.5l-30-106h-96l-30 106Zm30 534h96l30-106q-21 7-40 10t-38 3q-19 0-38-3t-40-10l30 106Z"/>
    </Icon>
  );
});

IconMaterialWatchCheckW100.displayName = 'AmauiIconMaterialWatchCheckW100';

export default IconMaterialWatchCheckW100;
