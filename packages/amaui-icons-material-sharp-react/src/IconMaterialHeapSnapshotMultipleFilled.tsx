import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeapSnapshotMultipleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeapSnapshotMultipleFilled'

      short_name='HeapSnapshotMultiple'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M450 556q21 0 35.5-14.5T500 506q0-21-14.5-35.5T450 456q-21 0-35.5 14.5T400 506q0 21 14.5 35.5T450 556Zm7 180 223-223-57-57-223 223 57 57Zm173 0q21 0 35.5-14.5T680 686q0-21-14.5-35.5T630 636q-21 0-35.5 14.5T580 686q0 21 14.5 35.5T630 736ZM240 856V136h360l240 240v480H240Zm320-440h200L560 216v200ZM80 1016V376h80v560h440v80H80Z"/>
    </Icon>
  );
});

IconMaterialHeapSnapshotMultipleFilled.displayName = 'AmauiIconMaterialHeapSnapshotMultipleFilled';

export default IconMaterialHeapSnapshotMultipleFilled;
