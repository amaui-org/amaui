import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletW100'

      short_name='Tablet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 18.7V5.3h19.4v13.4Zm3.05-.7h13.3V6H5.35ZM3 18h1.65V6H3Zm16.35 0H21V6h-1.65ZM3 6h1.65Zm16.35 0H21Z"/>
    </Icon>
  );
});

IconMaterialTabletW100.displayName = 'AmauiIconMaterialTabletW100';

export default IconMaterialTabletW100;
