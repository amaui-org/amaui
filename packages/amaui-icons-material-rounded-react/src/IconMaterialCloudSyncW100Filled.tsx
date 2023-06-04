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
      <path d="M15 19.35q-.95 0-1.65-.7t-.7-1.65q0-.95.638-1.625.637-.675 1.737-.725.35-.875 1.113-1.438.762-.562 1.862-.562 1.2 0 2.088.8.887.8 1.012 2.2h.4q.775 0 1.312.525.538.525.538 1.3t-.538 1.325q-.537.55-1.312.55Zm-9.8-.2q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.85q-1.95-1.7-2.675-3.2-.725-1.5-.725-3.15 0-2.2 1.162-4.025Q6.975 6.25 8.85 5.35q.2-.1.35 0 .15.1.15.325 0 .1-.063.187-.062.088-.137.138-1.7.8-2.75 2.463-1.05 1.662-1.05 3.637 0 1.575.675 2.9t2.525 2.95V15.1q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.3q0 .325-.212.538-.213.212-.538.212Zm13.35-8.5q-.275-1.175-.887-2.15-.613-.975-2.213-2.425V8.9q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V5.6q0-.325.213-.538.212-.212.537-.212h3.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.85q1.75 1.55 2.4 2.725.65 1.175.9 2.375Z"/>
    </Icon>
  );
});

IconMaterialCloudSyncW100Filled.displayName = 'AmauiIconMaterialCloudSyncW100Filled';

export default IconMaterialCloudSyncW100Filled;
