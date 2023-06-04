import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardTravelW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardTravelW100'

      short_name='CardTravel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 16.45v1.75q0 .35.225.575Q4.45 19 4.8 19h14.4q.35 0 .575-.225Q20 18.55 20 18.2v-1.75ZM8.3 7.3V5.8q0-.625.438-1.063Q9.175 4.3 9.8 4.3h4.4q.625 0 1.063.437.437.438.437 1.063v1.5h3.5q.625 0 1.063.437.437.438.437 1.063v9.4q0 .625-.437 1.062-.438.438-1.063.438H4.8q-.625 0-1.063-.438Q3.3 18.825 3.3 18.2V8.8q0-.625.437-1.063Q4.175 7.3 4.8 7.3ZM4 14.55h16V8.8q0-.35-.225-.575Q19.55 8 19.2 8h-3.5v1.175q0 .125-.1.225t-.25.1q-.15 0-.25-.1t-.1-.25V8H9v1.175q0 .125-.1.225t-.25.1q-.15 0-.25-.1t-.1-.25V8H4ZM9 7.3h6V5.8q0-.35-.225-.575Q14.55 5 14.2 5H9.8q-.35 0-.575.225Q9 5.45 9 5.8ZM4 18.2V8 19 18.2Z"/>
    </Icon>
  );
});

IconMaterialCardTravelW100.displayName = 'AmauiIconMaterialCardTravelW100';

export default IconMaterialCardTravelW100;
