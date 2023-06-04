import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeMiniW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMiniW100'

      short_name='HomeMini'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17.7q-2.375 0-4.037-1.662Q3.3 14.375 3.3 12q0-.775.4-1.762.4-.988 1.4-1.863Q6.1 7.5 7.775 6.9 9.45 6.3 12 6.3t4.225.6q1.675.6 2.675 1.475 1 .875 1.4 1.863.4.987.4 1.762 0 2.375-1.662 4.038Q17.375 17.7 15 17.7Zm.15-.7h5.7q1.775 0 3.263-1.075Q19.6 14.85 19.95 12.7H4.05q.35 2.15 1.838 3.225Q7.375 17 9.15 17ZM12 12.7Zm0-.35ZM4 12h16q0-.75-.4-1.625T18.263 8.75Q17.325 8 15.787 7.5 14.25 7 12 7t-3.775.5Q6.7 8 5.763 8.75q-.938.75-1.351 1.625Q4 11.25 4 12Zm8 0Z"/>
    </Icon>
  );
});

IconMaterialHomeMiniW100.displayName = 'AmauiIconMaterialHomeMiniW100';

export default IconMaterialHomeMiniW100;
