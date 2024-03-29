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
      <path d="M3 20q-.425 0-.712-.288Q2 19.425 2 19V5q0-.425.288-.713Q2.575 4 3 4t2.725.75q2.3.75 6.275.75 4 0 6.288-.75Q20.575 4 21 4q.425 0 .712.287Q22 4.575 22 5v14q0 .425-.288.712Q21.425 20 21 20t-2.712-.75Q16 18.5 12 18.5q-3.975 0-6.275.75Q3.425 20 3 20Zm1-2.35q1.95-.575 3.963-.862Q9.975 16.5 12 16.5t4.038.288q2.012.287 3.962.862V6.375q-1.95.575-3.962.85Q14.025 7.5 12 7.5q-2.025 0-4.037-.275Q5.95 6.95 4 6.375ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontal.displayName = 'AmauiIconMaterialPanoramaHorizontal';

export default IconMaterialPanoramaHorizontal;
