import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMovedLocationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovedLocationW100'

      short_name='MovedLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M713-371q-48 66-100.5 125.5T500-132q-5 4-10 6t-10 2q-5 0-10-2t-10-6q-40-36-88-84t-89.5-103q-41.5-55-69-114T186-552q0-125 85-213.5T480-854q35 0 69.5 7t65.5 24q4 2 6.5 5t2.5 8q0 7-4.5 11.5T608-794q-1 0-8-3-27-17-58-23t-62-6q-112 0-189 80.5T214-552q0 76 65 176t201 224q60-55 111.5-111.5T690-387q2-3 5.5-5.5t7.5-2.5q6 0 10 4t4 10q0 3-1 5.5t-3 4.5Zm119-256q-165 0-239.5 22.5T467-531q52-89 154.5-106.5T830-655L710-775q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l132 133q9 9 9 21t-9 21L729-486q-4 4-9 3.5t-9-4.5q-4-4-4-9.5t4-9.5l121-121Z"/>
    </Icon>
  );
});

IconMaterialMovedLocationW100.displayName = 'AmauiIconMaterialMovedLocationW100';

export default IconMaterialMovedLocationW100;
