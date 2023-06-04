import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFirstPageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FirstPageW100Filled'

      short_name='FirstPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 17.35V6.65h.7v10.7ZM17 17.1 11.9 12 17 6.9l.5.5-4.6 4.6 4.6 4.6Z"/>
    </Icon>
  );
});

IconMaterialFirstPageW100Filled.displayName = 'AmauiIconMaterialFirstPageW100Filled';

export default IconMaterialFirstPageW100Filled;
