import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSafetyCheckOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckOffW100Filled'

      short_name='SafetyCheckOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-260q-32 40-71 69.5T502-142q-5 2-11 3t-11 1q-1 0-22-4-115-45-180.5-148.5T212-516v-192l-70-70q-4-4-4.5-9.5T142-798q5-5 10-5t10 5l640 640q4 4 4.5 9.5T802-138q-5 5-10 5t-10-5L660-260Zm-180-71q23 0 44-7t39-19L358-562q-12 18-19 39t-7 44q0 62 43 105t105 43Zm232-17-90-90q3-10 4.5-20t1.5-21q0-62-43-105t-105-43q-11 0-21 1.5t-20 4.5L302-758l157-58q11-4 21.5-4t20.5 4l208 77q17 7 28 22.5t11 34.5v166q0 38-8 79t-28 89Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckOffW100Filled.displayName = 'AmauiIconMaterialSafetyCheckOffW100Filled';

export default IconMaterialSafetyCheckOffW100Filled;
