import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAodTabletW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodTabletW100Filled'

      short_name='AodTablet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 11.1v-.7h6.7v.7Zm1 3v-.7h4.7v.7ZM2.3 18.7V5.3h19.4v13.4Zm3.05-.7h13.3V6H5.35Z"/>
    </Icon>
  );
});

IconMaterialAodTabletW100Filled.displayName = 'AmauiIconMaterialAodTabletW100Filled';

export default IconMaterialAodTabletW100Filled;
