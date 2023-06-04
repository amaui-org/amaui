import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StartW100Filled'

      short_name='Start'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.8 17.35V6.65h.7v10.7Zm13.35-.275-.5-.475 4.25-4.25H6.775v-.7h13.1l-4.2-4.25.475-.475L21.225 12Z"/>
    </Icon>
  );
});

IconMaterialStartW100Filled.displayName = 'AmauiIconMaterialStartW100Filled';

export default IconMaterialStartW100Filled;
