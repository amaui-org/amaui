import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridViewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewW100Filled'

      short_name='GridView'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 11V4.3H11V11Zm0 8.7V13H11v6.7ZM13 11V4.3h6.7V11Zm0 8.7V13h6.7v6.7Z"/>
    </Icon>
  );
});

IconMaterialGridViewW100Filled.displayName = 'AmauiIconMaterialGridViewW100Filled';

export default IconMaterialGridViewW100Filled;
