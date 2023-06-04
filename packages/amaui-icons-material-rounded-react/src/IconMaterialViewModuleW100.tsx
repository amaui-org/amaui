import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewModuleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewModuleW100'

      short_name='ViewModule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.35 16.2V7.8q0-.625.438-1.062Q5.225 6.3 5.85 6.3h12.325q.625 0 1.063.438.437.437.437 1.062v8.4q0 .625-.437 1.062-.438.438-1.063.438H5.85q-.625 0-1.062-.438-.438-.437-.438-1.062Zm10.45-4.55h4.175V7.8q0-.35-.225-.575Q18.525 7 18.175 7H14.8v4.65Zm-4.875 0H14.1V7H9.925v4.65Zm-4.875 0h4.175V7H5.85q-.35 0-.575.225-.225.225-.225.575v3.85Zm.8 5.35h3.375v-4.65H5.05v3.85q0 .35.225.575Q5.5 17 5.85 17Zm4.075 0H14.1v-4.65H9.925V17Zm4.875 0h3.375q.35 0 .575-.225.225-.225.225-.575v-3.85H14.8V17Z"/>
    </Icon>
  );
});

IconMaterialViewModuleW100.displayName = 'AmauiIconMaterialViewModuleW100';

export default IconMaterialViewModuleW100;
