import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSyncProblemSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncProblemSharp'
      short_name='SyncProblem'

      {...props}
    >
      <path d="M11 13V7H13V13ZM12 17Q11.575 17 11.288 16.712Q11 16.425 11 16Q11 15.575 11.288 15.287Q11.575 15 12 15Q12.425 15 12.713 15.287Q13 15.575 13 16Q13 16.425 12.713 16.712Q12.425 17 12 17ZM15 4H21V6H18.25L18.65 6.35Q19.875 7.575 20.438 9.012Q21 10.45 21 11.95Q21 14.725 19.337 16.887Q17.675 19.05 15 19.75V17.65Q16.8 17 17.9 15.438Q19 13.875 19 11.95Q19 10.825 18.575 9.762Q18.15 8.7 17.25 7.8L17 7.55V10H15ZM9 20H3V18H5.75L5.35 17.65Q4.05 16.5 3.525 15.025Q3 13.55 3 12.05Q3 9.275 4.662 7.112Q6.325 4.95 9 4.25V6.35Q7.2 7 6.1 8.562Q5 10.125 5 12.05Q5 13.175 5.425 14.237Q5.85 15.3 6.75 16.2L7 16.45V14H9Z"/>
    </Icon>
  );
});

IconMaterialSyncProblemSharp.displayName = 'AmauiIconMaterialSyncProblemSharp';

export default IconMaterialSyncProblemSharp;
