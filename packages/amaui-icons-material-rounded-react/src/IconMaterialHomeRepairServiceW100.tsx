import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeRepairServiceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairServiceW100'

      short_name='HomeRepairService'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 17.2v-6.4q0-.625.437-1.063Q4.175 9.3 4.8 9.3h2.85V7.55q0-.625.438-1.062.437-.438 1.062-.438h5.7q.625 0 1.063.438.437.437.437 1.062V9.3h2.85q.625 0 1.063.437.437.438.437 1.063v6.4q0 .625-.437 1.062-.438.438-1.063.438H4.8q-.625 0-1.063-.438Q3.3 17.825 3.3 17.2Zm1.5.8h14.4q.35 0 .575-.225Q20 17.55 20 17.2v-2.85h-2.65V15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-.65h-9.3V15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-.65H4v2.85q0 .35.225.575Q4.45 18 4.8 18ZM4 10.8v2.85h2.65V13q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v.65h9.3V13q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v.65H20V10.8q0-.35-.225-.575Q19.55 10 19.2 10H4.8q-.35 0-.575.225Q4 10.45 4 10.8Zm4.35-1.5h7.3V7.55q0-.35-.225-.575-.225-.225-.575-.225h-5.7q-.35 0-.575.225-.225.225-.225.575Z"/>
    </Icon>
  );
});

IconMaterialHomeRepairServiceW100.displayName = 'AmauiIconMaterialHomeRepairServiceW100';

export default IconMaterialHomeRepairServiceW100;
