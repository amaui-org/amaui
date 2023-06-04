import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterNoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterNoneW100Filled'

      short_name='FilterNone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 16.7V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialFilterNoneW100Filled.displayName = 'AmauiIconMaterialFilterNoneW100Filled';

export default IconMaterialFilterNoneW100Filled;
