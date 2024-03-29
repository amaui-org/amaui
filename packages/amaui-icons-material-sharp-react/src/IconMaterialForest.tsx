import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForest = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Forest'

      short_name='Forest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22v-4H0l3.85-6H2L9 2l3 4.3L15 2l7 10h-1.85L24 18h-7v4h-4v-4h-2v4Zm9.725-6h3.625l-3.875-6h1.675L15 5.5l-1.775 2.525L16 12h-1.85ZM3.65 16h10.7l-3.875-6h1.675L9 5.5 5.85 10h1.675Zm0 0h3.875H5.85h6.3-1.675 3.875Zm13.075 0H14.15 16h-2.775 4.925-1.675 3.875ZM13 18h4-4Zm5.025 0Z"/>
    </Icon>
  );
});

IconMaterialForest.displayName = 'AmauiIconMaterialForest';

export default IconMaterialForest;
