import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletW100Filled'

      short_name='Tablet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 18.7V5.3h19.4v13.4Zm3.05-.7h13.3V6H5.35Z"/>
    </Icon>
  );
});

IconMaterialTabletW100Filled.displayName = 'AmauiIconMaterialTabletW100Filled';

export default IconMaterialTabletW100Filled;
