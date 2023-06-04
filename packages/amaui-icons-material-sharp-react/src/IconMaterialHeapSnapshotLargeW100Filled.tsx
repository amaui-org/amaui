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
      <path d="M579.882 810Q594 810 604 800.118q10-9.883 10-24Q614 762 604.118 752q-9.883-10-24-10Q566 742 556 751.882q-10 9.883-10 24Q546 790 555.882 800q9.883 10 24 10ZM378 797l223-223-19-19-223 223 19 19Zm1.882-187Q394 610 404 600.118q10-9.883 10-24Q414 562 404.118 552q-9.883-10-24-10Q366 542 356 551.882q-10 9.883-10 24Q346 590 355.882 600q9.883 10 24 10ZM212 924V228h374l162 162v534H212Zm360-520h148L572 256v148Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotLargeW100Filled.displayName = 'AmauiIconMaterialHeapSnapshotLargeW100Filled';

export default IconMaterialHeapSnapshotLargeW100Filled;
