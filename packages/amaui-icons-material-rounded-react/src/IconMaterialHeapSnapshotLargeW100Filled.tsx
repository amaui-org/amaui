import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeapSnapshotLargeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeapSnapshotLargeW100Filled'

      short_name='HeapSnapshotLarge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M579.882 810Q594 810 604 800.118q10-9.883 10-24Q614 762 604.118 752q-9.883-10-24-10Q566 742 556 751.882q-10 9.883-10 24Q546 790 555.882 800q9.883 10 24 10ZM369 787q4 4 9.667 4 5.666 0 9.333-4l204-204q4-3.667 4-9.333 0-5.667-4-9.667t-9.667-4q-5.666 0-9.333 4L368 769q-4 4-3.5 9t4.5 9Zm10.882-177Q394 610 404 600.118q10-9.883 10-24Q414 562 404.118 552q-9.883-10-24-10Q366 542 356 551.882q-10 9.883-10 24Q346 590 355.882 600q9.883 10 24 10ZM272 924q-26 0-43-17t-17-43V288q0-26 17-43t43-17h314l162 162v474q0 26-17 43t-43 17H272Zm448-520L572 256v118q0 13 8.5 21.5T602 404h118Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotLargeW100Filled.displayName = 'AmauiIconMaterialHeapSnapshotLargeW100Filled';

export default IconMaterialHeapSnapshotLargeW100Filled;
