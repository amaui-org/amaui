import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackHexagonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackHexagonW100'

      short_name='StackHexagon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m583-426 102-57q7-4 11-11.5t4-15.5v-116q0-8-4-15.5T685-653l-102-57q-7-4-15-4t-15 4l-102 57q-7 4-11 11.5t-4 15.5v116q0 8 4 15.5t11 11.5l102 57q7 4 15 4t15-4ZM368-308q-26 0-43-17t-17-43v-400q0-26 17-43t43-17h400q26 0 43 17t17 43v400q0 26-17 43t-43 17H368Zm0-28h400q14 0 23-9t9-23v-400q0-14-9-23t-23-9H368q-14 0-23 9t-9 23v400q0 14 9 23t23 9Zm200-232ZM218-164Zm35 24q-25 3-44.5-12T186-192l-48-374q-3-25 12.5-45.5T191-634l22-1q6 0 10.5 3.5T228-621q0 5-3.5 9.5T216-607l-20 1q-14 1-22 11.5t-6 24.5l46 374q2 14 12 22t24 6l470-59q6-1 10.5 2.5t5.5 9.5q1 6-2.5 10t-9.5 5l-471 60Z"/>
    </Icon>
  );
});

IconMaterialStackHexagonW100.displayName = 'AmauiIconMaterialStackHexagonW100';

export default IconMaterialStackHexagonW100;
