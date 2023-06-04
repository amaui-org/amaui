import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPark = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Park'

      short_name='Park'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.95 22h-3.9v-4H3l4-6H5l7-10 7 10h-2l4 6h-7.05Zm-7.2-6h4-1.9 6.3-1.9 4Zm0 0h10.5l-4-6h1.9L12 5.5 8.85 10h1.9Z"/>
    </Icon>
  );
});

IconMaterialPark.displayName = 'AmauiIconMaterialPark';

export default IconMaterialPark;
