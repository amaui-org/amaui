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
      <path d="M622-438q3-10 4.5-20t1.5-21q0-62-43-105t-105-43q-11 0-21 1.5t-20 4.5l183 183Zm90 90-22-22q14-32 22-71t8-75v-167q0-10-5.5-18T699-713l-208-77q-5-2-11-2t-11 2l-145 54-22-22 157-58q10-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5v166q0 38-8 79t-28 89ZM480-138q-4 0-22-5-115-45-180.5-148T212-516v-192l-70-70q-4-4-4.5-9.5T142-798q5-5 10-5t10 5l640 640q4 4 4.5 9.5T802-138q-5 5-10 5t-10-5L660-260q-32 40-71 69t-87 48q-5 2-11 3.5t-11 1.5Zm27-415Zm-67 73Zm40 316q45-14 90.5-48.5T640-280l-77-77q-18 12-39 19t-44 7q-62 0-105-43t-43-105q0-23 7-44t19-39L240-680v164q0 121 68 220t172 132Z"/>
    </Icon>
  );
});

IconMaterialSafetyCheckOffW100.displayName = 'AmauiIconMaterialSafetyCheckOffW100';

export default IconMaterialSafetyCheckOffW100;
