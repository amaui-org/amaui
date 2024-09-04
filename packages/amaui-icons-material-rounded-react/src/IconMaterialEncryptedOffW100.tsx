import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedOffW100'

      short_name='EncryptedOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M748-682v166q0 33-6 69t-21 77q-3 8-8.5 10t-10.5 0q-5-2-8-6.5t-1-10.5q13-31 20-67.5t7-71.5v-167q0-10-5.5-18T699-713l-208-77q-5-2-11-2t-11 2l-137 51q-4 2-7.5 1t-6.5-4q-5-5-4-13t9-11l136-50q10-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5ZM480-138q-4 0-22-5-115-45-180.5-148T212-516v-192l-70-70q-4-4-4.5-9.5T142-798q5-5 10-5t10 5l640 640q4 4 4.5 9.5T802-138q-5 5-10 5t-10-5L660-260q-32 40-71 69t-87 48q-5 2-11 3.5t-11 1.5Zm46-396q3-6 5-12.5t2-13.5q0-22-15.5-37.5T480-613q-7 0-13.5 2t-12.5 5l72 72Zm-67 73Zm19-121Zm2 418q45-14 90.5-48.5T640-280L511-409l1 6q2 6-2 11.5t-11 5.5h-36q-7 0-12-5.5t-3-12.5l11-57-219-219v164q0 121 68 220t172 132Z"/>
    </Icon>
  );
});

IconMaterialEncryptedOffW100.displayName = 'AmauiIconMaterialEncryptedOffW100';

export default IconMaterialEncryptedOffW100;
