import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialComputerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerW100'

      short_name='Computer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 17.3q-.625 0-1.063-.437Q3.3 16.425 3.3 15.8V6.4q0-.625.437-1.063Q4.175 4.9 4.8 4.9h14.4q.625 0 1.063.437.437.438.437 1.063v9.4q0 .625-.437 1.063-.438.437-1.063.437Zm0-.7h14.4q.35 0 .575-.225Q20 16.15 20 15.8V6.4q0-.35-.225-.575Q19.55 5.6 19.2 5.6H4.8q-.35 0-.575.225Q4 6.05 4 6.4v9.4q0 .35.225.575.225.225.575.225ZM2.35 19q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h19.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM4 16.6v-11 11Z"/>
    </Icon>
  );
});

IconMaterialComputerW100.displayName = 'AmauiIconMaterialComputerW100';

export default IconMaterialComputerW100;
