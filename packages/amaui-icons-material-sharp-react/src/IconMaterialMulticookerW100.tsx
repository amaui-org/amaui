import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMulticookerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MulticookerW100'

      short_name='Multicooker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 5.65V4.8q0-.625.438-1.063.437-.437 1.062-.437h3.7q.625 0 1.063.437.437.438.437 1.063v.85h2.85q.625 0 1.063.437.437.438.437 1.063V18.2q0 .625-.437 1.062-.438.438-1.063.438H5.8q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V7.15q0-.625.438-1.063.437-.437 1.062-.437ZM5.8 19h12.4q.35 0 .575-.225Q19 18.55 19 18.2V10h-2.65v1.35q0 .625-.437 1.062-.438.438-1.063.438h-5.7q-.625 0-1.062-.438-.438-.437-.438-1.062V10H5v8.2q0 .35.225.575Q5.45 19 5.8 19ZM8 17.2q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488Q7.725 15.8 8 15.8t.488.212q.212.213.212.488t-.212.487Q8.275 17.2 8 17.2Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm-6.85-5.05h5.7q.35 0 .575-.225.225-.225.225-.575V10h-7.3v1.35q0 .35.225.575.225.225.575.225ZM5 9.3h14V7.15q0-.35-.225-.575-.225-.225-.575-.225H5.8q-.35 0-.575.225Q5 6.8 5 7.15Zm4.35-3.65h5.3V4.8q0-.35-.225-.575Q14.2 4 13.85 4h-3.7q-.35 0-.575.225-.225.225-.225.575Z"/>
    </Icon>
  );
});

IconMaterialMulticookerW100.displayName = 'AmauiIconMaterialMulticookerW100';

export default IconMaterialMulticookerW100;
