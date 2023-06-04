import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterListW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListW100Filled'

      short_name='FilterList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.65 17.35v-.7h2.7v.7Zm-4-5.5v-.7h10.7v.7Zm-3-5.5v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFilterListW100Filled.displayName = 'AmauiIconMaterialFilterListW100Filled';

export default IconMaterialFilterListW100Filled;
