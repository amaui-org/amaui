import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudSyncFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudSyncFilled'

      short_name='CloudSync'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20v-2h2.725q-1.275-1.1-2-2.65Q4 13.8 4 12q0-2.8 1.7-4.938Q7.4 4.925 10 4.25v2.1q-1.75.625-2.875 2.162Q6 10.05 6 12q0 1.35.537 2.488Q7.075 15.625 8 16.45V14h2v6Zm11 0q-1.25 0-2.125-.875T12 17q0-1.2.825-2.062.825-.863 2.025-.913.425-.9 1.263-1.463Q16.95 12 18 12q1.325 0 2.288.863.962.862 1.162 2.137 1.05 0 1.8.725t.75 1.75q0 1.05-.725 1.787Q22.55 20 21.5 20Zm2.9-9q-.175-1.025-.675-1.9T16 7.55V10h-2V4h6v2h-2.725q1.075.95 1.763 2.225.687 1.275.887 2.775Z"/>
    </Icon>
  );
});

IconMaterialCloudSyncFilled.displayName = 'AmauiIconMaterialCloudSyncFilled';

export default IconMaterialCloudSyncFilled;
