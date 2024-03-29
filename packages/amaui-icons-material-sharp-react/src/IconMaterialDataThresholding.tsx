import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataThresholding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataThresholding'

      short_name='DataThresholding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm14.275-2H19v-1.725ZM5.85 19h1.825l3-3H12.8l-3 3h1.6l3-3h2.125l-3 3h1.625l3-3H19V5H5v12.725L6.725 16H8.85Zm1.8-5-1.4-1.4 4.425-4.425 2 2L16.35 6.5l1.4 1.4-5.075 5.1-2-2ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialDataThresholding.displayName = 'AmauiIconMaterialDataThresholding';

export default IconMaterialDataThresholding;
