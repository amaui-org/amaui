import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeapSnapshotThumbnail = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeapSnapshotThumbnail'

      short_name='HeapSnapshotThumbnail'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 856q-33 0-56.5-23.5T40 776V376q0-33 23.5-56.5T120 296h400q33 0 56.5 23.5T600 376v400q0 33-23.5 56.5T520 856H120Zm600-320q-17 0-28.5-11.5T680 496V336q0-17 11.5-28.5T720 296h160q17 0 28.5 11.5T920 336v160q0 17-11.5 28.5T880 536H720Zm40-80h80v-80h-80v80ZM120 776h400V376H120v400Zm600 80q-17 0-28.5-11.5T680 816V656q0-17 11.5-28.5T720 616h160q17 0 28.5 11.5T920 656v160q0 17-11.5 28.5T880 856H720Zm40-80h80v-80h-80v80Zm-640 0V376v400Zm640-320v-80 80Zm0 320v-80 80Zm-340-40q25 0 42.5-17.5T480 676q0-25-17.5-42.5T420 616q-25 0-42.5 17.5T360 676q0 25 17.5 42.5T420 736Zm-174-30 204-204q11-11 11-28t-11-28q-11-11-28-11t-28 11L190 650q-11 11-11 28t11 28q11 11 28 11t28-11Zm-26-170q25 0 42.5-17.5T280 476q0-25-17.5-42.5T220 416q-25 0-42.5 17.5T160 476q0 25 17.5 42.5T220 536Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotThumbnail.displayName = 'AmauiIconMaterialHeapSnapshotThumbnail';

export default IconMaterialHeapSnapshotThumbnail;
