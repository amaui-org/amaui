import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClosedCaptionAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClosedCaptionAddFilled'

      short_name='ClosedCaptionAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-360h120q5-4 9.5-7t8.5-5q4-2 8-4.5t8-4.5q2-5 3.5-9.5t1.5-9.5l1-22q0-13-8.5-21.5T690-452q-13 0-21.5 8.5T660-422v2h-80v-120h80v2q0 13 8.5 21.5T690-508q13 0 21.5-8.5T720-538v-22q0-17-11.5-28.5T680-600H560q-17 0-28.5 11.5T520-560v160q0 17 11.5 28.5T560-360ZM200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v294q0 11-9 19.5t-21 6.5q-42-2-82 14t-69 45q-31 31-46 70t-13 81q1 12-7 21t-19 9H200Zm560 0h-40q-17 0-28.5-11.5T680-200q0-17 11.5-28.5T720-240h40v-40q0-17 11.5-28.5T800-320q17 0 28.5 11.5T840-280v40h40q17 0 28.5 11.5T920-200q0 17-11.5 28.5T880-160h-40v40q0 17-11.5 28.5T800-80q-17 0-28.5-11.5T760-120v-40ZM280-360h120q17 0 28.5-11.5T440-400v-22q0-13-8.5-21.5T410-452q-13 0-21.5 8.5T380-422v2h-80v-120h80v2q0 13 8.5 21.5T410-508q13 0 21.5-8.5T440-538v-22q0-17-11.5-28.5T400-600H280q-17 0-28.5 11.5T240-560v160q0 17 11.5 28.5T280-360Z"/>
    </Icon>
  );
});

IconMaterialClosedCaptionAddFilled.displayName = 'AmauiIconMaterialClosedCaptionAddFilled';

export default IconMaterialClosedCaptionAddFilled;
