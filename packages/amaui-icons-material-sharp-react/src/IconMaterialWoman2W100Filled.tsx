import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWoman2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Woman2W100Filled'

      short_name='Woman2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.725 21.35V15.2H7.5l3.225-8.1h2.55l3.225 8.1h-3.225v6.15ZM12 5.75q-.65 0-1.125-.475T10.4 4.15q0-.65.475-1.125T12 2.55q.65 0 1.125.475T13.6 4.15q0 .65-.475 1.125T12 5.75Z"/>
    </Icon>
  );
});

IconMaterialWoman2W100Filled.displayName = 'AmauiIconMaterialWoman2W100Filled';

export default IconMaterialWoman2W100Filled;
