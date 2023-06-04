import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKettleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KettleW100Filled'

      short_name='Kettle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.3 17.7V6.425L4.95 3.3H17.2v2.35h2q.625 0 1.063.437.437.438.437 1.063v4.7q0 .625-.437 1.062-.438.438-1.063.438h-2v4.35Zm9.9-5.05h2q.35 0 .575-.225Q20 12.2 20 11.85v-4.7q0-.35-.225-.575-.225-.225-.575-.225h-2ZM13 15h1.5V6H13Zm-8.7 5.7V20h15.4v.7Z"/>
    </Icon>
  );
});

IconMaterialKettleW100Filled.displayName = 'AmauiIconMaterialKettleW100Filled';

export default IconMaterialKettleW100Filled;
