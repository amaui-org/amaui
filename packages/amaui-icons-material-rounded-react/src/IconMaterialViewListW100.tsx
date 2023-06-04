import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewListW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewListW100'

      short_name='ViewList'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 15.7V7.95q0-.625.438-1.063.437-.437 1.062-.437h12.4q.625 0 1.063.437.437.438.437 1.063v7.75q0 .625-.437 1.062-.438.438-1.063.438H5.8q-.625 0-1.062-.438Q4.3 16.325 4.3 15.7ZM5 9.8h2.65V7.15H5.8q-.35 0-.575.225Q5 7.6 5 7.95V9.8Zm3.35 0H19V7.95q0-.35-.225-.575-.225-.225-.575-.225H8.35V9.8Zm0 3.35H19V10.5H8.35v2.65Zm0 3.35h9.85q.35 0 .575-.225Q19 16.05 19 15.7v-1.85H8.35v2.65Zm-2.55 0h1.85v-2.65H5v1.85q0 .35.225.575.225.225.575.225ZM5 13.15h2.65V10.5H5v2.65Z"/>
    </Icon>
  );
});

IconMaterialViewListW100.displayName = 'AmauiIconMaterialViewListW100';

export default IconMaterialViewListW100;
