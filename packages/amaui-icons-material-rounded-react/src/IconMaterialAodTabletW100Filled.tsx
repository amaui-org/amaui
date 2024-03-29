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
      <path d="M9 11.1q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm1 3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-6.2 4.6q-.625 0-1.062-.438Q2.3 17.825 2.3 17.2V6.8q0-.625.438-1.062Q3.175 5.3 3.8 5.3h16.4q.625 0 1.063.438.437.437.437 1.062v10.4q0 .625-.437 1.062-.438.438-1.063.438Zm1.55-.7h13.3V6H5.35Z"/>
    </Icon>
  );
});

IconMaterialAodTabletW100Filled.displayName = 'AmauiIconMaterialAodTabletW100Filled';

export default IconMaterialAodTabletW100Filled;
