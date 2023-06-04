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
      <path d="M2.025 20.5V3.475q1.875.875 4.5 1.45t5.5.575q2.875 0 5.5-.575t4.5-1.45V20.5q-1.875-.875-4.5-1.438-2.625-.562-5.5-.562t-5.5.562q-2.625.563-4.5 1.438Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontalFilled.displayName = 'AmauiIconMaterialPanoramaHorizontalFilled';

export default IconMaterialPanoramaHorizontalFilled;
