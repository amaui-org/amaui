import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSyncDisabledSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncDisabledSharp'
      short_name='SyncDisabled'

      {...props}
    >
      <path d="M19.8 22.6 16.075 18.875Q15.6 19.15 15.088 19.375Q14.575 19.6 14 19.75V17.65Q14.15 17.6 14.3 17.538Q14.45 17.475 14.6 17.4L6.6 9.4Q6.325 10.025 6.162 10.688Q6 11.35 6 12.05Q6 13.175 6.425 14.237Q6.85 15.3 7.75 16.2L8 16.45V14H10V20H4V18H6.75L6.35 17.65Q5.125 16.425 4.562 14.988Q4 13.55 4 12.05Q4 10.925 4.287 9.887Q4.575 8.85 5.125 7.925L1.4 4.2L2.825 2.775L21.225 21.175ZM18.925 16.025 17.425 14.525Q17.7 13.925 17.85 13.275Q18 12.625 18 11.95Q18 10.825 17.575 9.762Q17.15 8.7 16.25 7.8L16 7.55V10H14V4H20V6H17.25L17.65 6.35Q18.875 7.575 19.438 9.012Q20 10.45 20 11.95Q20 13.075 19.712 14.087Q19.425 15.1 18.925 16.025ZM9.475 6.575 7.975 5.075Q8.45 4.8 8.95 4.6Q9.45 4.4 10 4.25V6.35Q9.875 6.4 9.738 6.45Q9.6 6.5 9.475 6.575Z"/>
    </Icon>
  );
});

IconMaterialSyncDisabledSharp.displayName = 'AmauiIconMaterialSyncDisabledSharp';

export default IconMaterialSyncDisabledSharp;
