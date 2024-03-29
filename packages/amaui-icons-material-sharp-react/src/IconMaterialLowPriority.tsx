import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLowPriority = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowPriority'

      short_name='LowPriority'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.3 20.7-1.4-1.4L8.2 18q-2.625-.15-4.412-2.025Q2 14.1 2 11.5q0-2.725 1.888-4.613Q5.775 5 8.5 5H12v2H8.5Q6.625 7 5.312 8.3 4 9.6 4 11.475q0 1.775 1.188 3.05Q6.375 15.8 8.15 15.95L6.9 14.7l1.4-1.4L12 17ZM14 18v-2h8v2Zm0-5.5v-2h8v2ZM14 7V5h8v2Z"/>
    </Icon>
  );
});

IconMaterialLowPriority.displayName = 'AmauiIconMaterialLowPriority';

export default IconMaterialLowPriority;
