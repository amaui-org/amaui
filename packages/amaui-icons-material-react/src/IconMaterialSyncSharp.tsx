import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSyncSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncSharp'
      short_name='Sync'

      {...props}
    >
      <path d="M14 4H20V6H17.25L17.65 6.35Q18.875 7.575 19.438 9.012Q20 10.45 20 11.95Q20 14.725 18.337 16.887Q16.675 19.05 14 19.75V17.65Q15.8 17 16.9 15.438Q18 13.875 18 11.95Q18 10.825 17.575 9.762Q17.15 8.7 16.25 7.8L16 7.55V10H14ZM10 20H4V18H6.75L6.35 17.65Q5.05 16.5 4.525 15.025Q4 13.55 4 12.05Q4 9.275 5.662 7.112Q7.325 4.95 10 4.25V6.35Q8.2 7 7.1 8.562Q6 10.125 6 12.05Q6 13.175 6.425 14.237Q6.85 15.3 7.75 16.2L8 16.45V14H10Z"/>
    </Icon>
  );
});

IconMaterialSyncSharp.displayName = 'AmauiIconMaterialSyncSharp';

export default IconMaterialSyncSharp;
