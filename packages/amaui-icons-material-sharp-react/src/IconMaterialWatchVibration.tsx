import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchVibration = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchVibration'

      short_name='WatchVibration'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M99-260q-28-49-43.5-104.5T40-480q0-60 15.5-115.5T99-700l69 40q-23 40-35.5 85.5T120-480q0 49 12.5 94.5T168-300l-69 40Zm762 0-69-40q23-40 35.5-85.5T840-480q0-49-12.5-94.5T792-660l69-40q28 49 43.5 104.5T920-480q0 60-15.5 115.5T861-260ZM420-800h120-120Zm0 640h120-120Zm-60 80-54-182q-48-38-77-95t-29-123q0-66 29-123t77-95l54-182h240l54 182q48 38 77 95t29 123q0 66-29 123t-77 95L600-80H360Zm120-200q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm-76-470q20-5 38.5-8t37.5-3q19 0 37.5 3t38.5 8l-16-50H420l-16 50Zm16 590h120l16-50q-20 5-38.5 7.5T480-200q-19 0-37.5-2.5T404-210l16 50Z"/>
    </Icon>
  );
});

IconMaterialWatchVibration.displayName = 'AmauiIconMaterialWatchVibration';

export default IconMaterialWatchVibration;
