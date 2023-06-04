import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeapSnapshotLargeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeapSnapshotLargeW100'

      short_name='HeapSnapshotLarge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M580 810q14 0 24-10t10-24q0-14-10-24t-24-10q-14 0-24 10t-10 24q0 14 10 24t24 10Zm-211-23q4 4 9.5 4t9.5-4l204-204q4-4 4-9.5t-4-9.5q-4-4-9.5-4t-9.5 4L368 769q-4 4-3.5 9t4.5 9Zm11-177q14 0 24-10t10-24q0-14-10-24t-24-10q-14 0-24 10t-10 24q0 14 10 24t24 10ZM272 924q-26 0-43-17t-17-43V288q0-26 17-43t43-17h314l162 162v474q0 26-17 43t-43 17H272Zm300-550V256H272q-12 0-22 10t-10 22v576q0 12 10 22t22 10h416q12 0 22-10t10-22V404H602q-13 0-21.5-8.5T572 374ZM240 256v148-148 640-640Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotLargeW100.displayName = 'AmauiIconMaterialHeapSnapshotLargeW100';

export default IconMaterialHeapSnapshotLargeW100;
