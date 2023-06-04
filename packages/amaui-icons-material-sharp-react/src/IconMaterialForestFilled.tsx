import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForestFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForestFilled'

      short_name='Forest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 22v-3h4v3Zm-6 0v-4H0l3.85-6H2L9 2l7 10h-1.85l3.875 6H11v4Zm12.25-4L16 13h1.925l-5.3-7.575L15 2l7 10h-1.85L24 18Z"/>
    </Icon>
  );
});

IconMaterialForestFilled.displayName = 'AmauiIconMaterialForestFilled';

export default IconMaterialForestFilled;
