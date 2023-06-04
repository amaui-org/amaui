import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMan2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man2W100Filled'

      short_name='Man2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.725 21.35V14.9H8.6V7.55h6.8v7.35h-2.125v6.45ZM12 5.75q-.65 0-1.125-.475T10.4 4.15q0-.65.475-1.125T12 2.55q.65 0 1.125.475T13.6 4.15q0 .65-.475 1.125T12 5.75Z"/>
    </Icon>
  );
});

IconMaterialMan2W100Filled.displayName = 'AmauiIconMaterialMan2W100Filled';

export default IconMaterialMan2W100Filled;
