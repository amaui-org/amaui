import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVrpano = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vrpano'

      short_name='Vrpano'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 15.4q1.5-.2 3.113-.3Q10.225 15 12 15q1.725 0 3.363.1 1.637.1 3.137.3L14 10l-2.85 3.4-2-2.4ZM4 17.65q1.95-.575 3.963-.862Q9.975 16.5 12 16.5t4.038.288q2.012.287 3.962.862V6.375q-1.95.575-3.962.85Q14.025 7.5 12 7.5q-2.025 0-4.037-.275Q5.95 6.95 4 6.375ZM12 12Zm-9.975 8.5V3.475q1.875.875 4.5 1.45t5.5.575q2.875 0 5.5-.575t4.5-1.45V20.5q-1.875-.875-4.5-1.438-2.625-.562-5.5-.562t-5.5.562q-2.625.563-4.5 1.438Z"/>
    </Icon>
  );
});

IconMaterialVrpano.displayName = 'AmauiIconMaterialVrpano';

export default IconMaterialVrpano;
