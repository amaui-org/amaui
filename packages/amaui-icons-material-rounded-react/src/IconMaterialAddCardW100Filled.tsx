import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddCardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCardW100Filled'

      short_name='AddCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 10.95h16v-1.9H4Zm16 10.4q-.15 0-.25-.1t-.1-.25v-2.65H17q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65H23q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65V21q0 .15-.1.25t-.25.1ZM4.8 18.7q-.625 0-1.063-.438Q3.3 17.825 3.3 17.2V6.8q0-.625.437-1.062Q4.175 5.3 4.8 5.3h14.4q.625 0 1.063.438.437.437.437 1.062v5.85h-1.05q-2.075 0-3.537 1.462-1.463 1.463-1.463 3.538v1.05Z"/>
    </Icon>
  );
});

IconMaterialAddCardW100Filled.displayName = 'AmauiIconMaterialAddCardW100Filled';

export default IconMaterialAddCardW100Filled;
