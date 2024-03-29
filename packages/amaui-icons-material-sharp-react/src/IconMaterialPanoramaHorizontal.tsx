import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaHorizontal = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontal'

      short_name='PanoramaHorizontal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17.65q1.95-.575 3.963-.862Q9.975 16.5 12 16.5t4.038.288q2.012.287 3.962.862V6.375q-1.95.575-3.962.85Q14.025 7.5 12 7.5q-2.025 0-4.037-.275Q5.95 6.95 4 6.375ZM12 12Zm-9.975 8.5V3.475q1.875.875 4.5 1.45t5.5.575q2.875 0 5.5-.575t4.5-1.45V20.5q-1.875-.875-4.5-1.438-2.625-.562-5.5-.562t-5.5.562q-2.625.563-4.5 1.438Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontal.displayName = 'AmauiIconMaterialPanoramaHorizontal';

export default IconMaterialPanoramaHorizontal;
