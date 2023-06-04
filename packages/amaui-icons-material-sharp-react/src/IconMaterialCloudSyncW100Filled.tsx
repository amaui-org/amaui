import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudSyncW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudSyncW100Filled'

      short_name='CloudSync'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.85 19.15v-.7h3.2q-1.95-1.7-2.675-3.2-.725-1.5-.725-3.15 0-2.35 1.313-4.25 1.312-1.9 3.387-2.7v.75q-1.8.775-2.9 2.475-1.1 1.7-1.1 3.725 0 1.575.675 2.9t2.525 2.95v-3.2h.7v4.4Zm10.15.2q-.95 0-1.65-.7t-.7-1.65q0-.95.638-1.625.637-.675 1.737-.725.35-.875 1.113-1.438.762-.562 1.862-.562 1.2 0 2.088.8.887.8 1.012 2.2h.4q.775 0 1.312.525.538.525.538 1.3t-.538 1.325q-.537.55-1.312.55Zm3.55-8.7q-.275-1.175-.887-2.15-.613-.975-2.213-2.425V9.25h-.7v-4.4h4.4v.7h-3.2q1.75 1.55 2.4 2.725.65 1.175.9 2.375Z"/>
    </Icon>
  );
});

IconMaterialCloudSyncW100Filled.displayName = 'AmauiIconMaterialCloudSyncW100Filled';

export default IconMaterialCloudSyncW100Filled;
