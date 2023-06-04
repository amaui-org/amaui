import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoReadPlayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlayW100Filled'

      short_name='AutoReadPlay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 12.8 4.2-2.8L10 7.2Zm-6.7 6.7V3.3h17.4v13.4H6.1Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPlayW100Filled.displayName = 'AmauiIconMaterialAutoReadPlayW100Filled';

export default IconMaterialAutoReadPlayW100Filled;
