import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddCardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCardW100'

      short_name='AddCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.625 0-1.063-.438Q3.3 17.825 3.3 17.2V6.8q0-.625.437-1.062Q4.175 5.3 4.8 5.3h14.4q.625 0 1.063.438.437.437.437 1.062v4.15H4v6.3q0 .35.225.55.225.2.575.2h7.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM4 9.05h16V6.8q0-.35-.225-.575Q19.55 6 19.2 6H4.8q-.35 0-.575.225Q4 6.45 4 6.8Zm16 12.3q-.15 0-.25-.1t-.1-.25v-2.65H17q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.65V15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65H23q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65V21q0 .15-.1.25t-.25.1ZM4 18V6v12Z"/>
    </Icon>
  );
});

IconMaterialAddCardW100.displayName = 'AmauiIconMaterialAddCardW100';

export default IconMaterialAddCardW100;
