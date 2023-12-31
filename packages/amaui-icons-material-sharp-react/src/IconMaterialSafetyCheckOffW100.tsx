import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSafetyCheckOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SafetyCheckOffW100'

      short_name='SafetyCheckOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M622-438q3-10 4.5-20t1.5-21q0-62-43-105t-105-43q-11 0-21 1.5t-20 4.5l183 183Zm90 90-22-22q14-32 22-71t8-75v-189l-240-89-156 58-22-22 178-66 268 100v208q0 38-8 79t-28 89Zm80 220L660-260q-35 44-82 77.5T480-134q-122-38-195-146t-73-236v-192l-80-80 20-20 660 660-20 20ZM440-480Zm67-73Zm-27 389q45-14 90.5-48.5T640-280l-77-77q-18 12-39 19t-44 7q-62 0-105-43t-43-105q0-23 7-44t19-39L240-680v164q0 121 68 220t172 132Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckOffW100.displayName = 'AmauiIconMaterialSafetyCheckOffW100';

export default IconMaterialSafetyCheckOffW100;
