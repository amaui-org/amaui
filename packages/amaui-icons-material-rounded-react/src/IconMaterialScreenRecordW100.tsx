import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenRecordW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenRecordW100'

      short_name='ScreenRecord'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-306q-72 0-123-51t-51-123q0-72 51-123t123-51q72 0 123 51t51 123q0 72-51 123t-123 51Zm320-174q0-41-9.5-78.5T764-629q-3-6-2.5-12t5.5-9q5-3 11-1t9 8q20 37 30.5 77.5T828-480q0 45-10.5 85.5T787-317q-3 6-9 8t-11-1q-5-3-5.5-9t2.5-12q17-33 26.5-70.5T800-480ZM480-800q-41 0-78.5 9.5T331-764q-6 3-12 2.5t-9-5.5q-3-5-1-11t8-9q37-20 77.5-30.5T480-828q45 0 86 10.5t78 30.5q6 3 8 9t-1 11q-3 5-9.5 6t-12.5-2q-34-17-71-27t-78-10ZM160-480q0 41 10 78t27 71q3 6 2 12.5t-6 9.5q-5 3-11 1t-9-8q-20-37-30.5-78T132-480q0-45 10.5-85.5T173-643q3-6 9-8t11 1q5 3 5.5 9t-2.5 12q-17 33-26.5 70.5T160-480Zm320 320q41 0 78.5-9.5T629-196q6-3 12-2.5t9 5.5q3 5 1 11t-8 9q-37 20-77.5 30.5T480-132q-45 0-85.5-10.5T317-173q-6-3-8-9t1-11q3-5 9-5.5t12 2.5q33 17 70.5 26.5T480-160Z"/>
    </Icon>
  );
});

IconMaterialScreenRecordW100.displayName = 'AmauiIconMaterialScreenRecordW100';

export default IconMaterialScreenRecordW100;
