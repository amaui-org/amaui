import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaHorizontalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontalFilled'

      short_name='PanoramaHorizontal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20q-.425 0-.712-.288Q2 19.425 2 19V5q0-.425.288-.713Q2.575 4 3 4t2.725.75q2.3.75 6.275.75 4 0 6.288-.75Q20.575 4 21 4q.425 0 .712.287Q22 4.575 22 5v14q0 .425-.288.712Q21.425 20 21 20t-2.712-.75Q16 18.5 12 18.5q-3.975 0-6.275.75Q3.425 20 3 20Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontalFilled.displayName = 'AmauiIconMaterialPanoramaHorizontalFilled';

export default IconMaterialPanoramaHorizontalFilled;
