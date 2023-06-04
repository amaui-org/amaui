import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeapSnapshotThumbnailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeapSnapshotThumbnailFilled'

      short_name='HeapSnapshotThumbnail'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M40 856V296h560v560H40Zm640-320V296h240v240H680Zm0 320V616h240v240H680ZM420 736q25 0 42.5-17.5T480 676q0-25-17.5-42.5T420 616q-25 0-42.5 17.5T360 676q0 25 17.5 42.5T420 736Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T280 476q0-25-17.5-42.5T220 416q-25 0-42.5 17.5T160 476q0 25 17.5 42.5T220 536Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotThumbnailFilled.displayName = 'AmauiIconMaterialHeapSnapshotThumbnailFilled';

export default IconMaterialHeapSnapshotThumbnailFilled;
