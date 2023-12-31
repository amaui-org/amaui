import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCastWarningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastWarningW100'

      short_name='CastWarning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480Zm288 268H572v-14q0-7-1-14h197q14 0 23-9t9-23v-191q8-2 14.5-5.5T828-475v203q0 25-17.5 42.5T768-212ZM132-652v-36q0-25 17.5-42.5T192-748h285q-2 7-2.5 13.5T473-720H192q-14 0-23 9t-9 23v37q-7-1-14-1h-14Zm588 102q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm0-58q8 0 13-5t5-13q0-8-5-13t-13-5q-8 0-13 5t-5 13q0 8 5 13t13 5Zm0-72q6 0 10-4t4-10v-80q0-6-4-10t-10-4q-6 0-10 4t-4 10v80q0 6 4 10t10 4ZM164-212q-14 0-23-9t-9-23q0-14 9-23t23-9q14 0 23 9t9 23q0 14-9 23t-23 9Zm146 0q-6 0-10-4.5t-5-10.5q-5-59-47.5-100T145-375q-6-1-9.5-5t-3.5-10q0-6 5-10t11-3q71 6 120.5 55.5T323-227q1 6-3 10.5t-10 4.5Zm148 0q-7 0-10.5-6t-4.5-14q-8-119-92-202.5T147-524q-6 0-10.5-4t-4.5-10q0-6 5-10t12-4q132 6 224.5 99T472-228q0 7-4 11.5t-10 4.5Z"/>
    </Icon>
  );
});

IconMaterialCastWarningW100.displayName = 'AmauiIconMaterialCastWarningW100';

export default IconMaterialCastWarningW100;
