import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartVentilationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartVentilationFilled'

      short_name='SmartVentilation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M350-40q-39 0-66.5-27.5T256-134q0-23 11-44t31-34q20-14 33-35t18-45q-4-2-8.5-4t-8.5-4l-88 31q-14 5-28.5 9t-29.5 4q-69 0-107.5-56T40-450q0-43 27-68.5t66-25.5q23 0 44 11t34 31q14 20 35.5 32.5T292-452l4-8 4-8-31-88q-5-14-9-28t-4-29q0-69 55.5-108T450-760q44 0 69 27.5t25 66.5q0 23-11 44t-31 34q-20 14-33 35t-18 45q4 2 8.5 4t8.5 4l88-31q14-5 28.5-9t29.5-4q69 0 107.5 59.5T760-350q0 39-27 66.5T667-256q-23 0-44-10.5T589-297q-14-20-35.5-33T508-348l-4 8-4 8 31 89q5 14 9 26.5t4 26.5q1 77-58 113.5T350-40Zm50-320q17 0 28.5-11.5T440-400q0-17-11.5-28.5T400-440q-17 0-28.5 11.5T360-400q0 17 11.5 28.5T400-360Zm340-200q0-75-52.5-127.5T560-740q75 0 127.5-52.5T740-920q0 75 52.5 127.5T920-740q-75 0-127.5 52.5T740-560Z"/>
    </Icon>
  );
});

IconMaterialSmartVentilationFilled.displayName = 'AmauiIconMaterialSmartVentilationFilled';

export default IconMaterialSmartVentilationFilled;
