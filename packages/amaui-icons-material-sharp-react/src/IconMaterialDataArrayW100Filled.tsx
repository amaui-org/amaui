import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataArrayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataArrayW100Filled'

      short_name='DataArray'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.65 18.85v-.7h2.5V5.85h-2.5v-.7h3.2v13.7Zm-10.5 0V5.15h3.2v.7h-2.5v12.3h2.5v.7Z"/>
    </Icon>
  );
});

IconMaterialDataArrayW100Filled.displayName = 'AmauiIconMaterialDataArrayW100Filled';

export default IconMaterialDataArrayW100Filled;
