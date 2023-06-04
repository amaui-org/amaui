import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabW100Filled'

      short_name='Tab'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM13 10h7V6h-7Z"/>
    </Icon>
  );
});

IconMaterialTabW100Filled.displayName = 'AmauiIconMaterialTabW100Filled';

export default IconMaterialTabW100Filled;
