import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletW100'

      short_name='Tablet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 18.7q-.625 0-1.062-.438Q2.3 17.825 2.3 17.2V6.8q0-.625.438-1.062Q3.175 5.3 3.8 5.3h16.4q.625 0 1.063.438.437.437.437 1.062v10.4q0 .625-.437 1.062-.438.438-1.063.438Zm1.55-.7h13.3V6H5.35Zm-.7-12H3.8q-.35 0-.575.225Q3 6.45 3 6.8v10.4q0 .35.225.575Q3.45 18 3.8 18h.85Zm14.7 0v12h.85q.35 0 .575-.225Q21 17.55 21 17.2V6.8q0-.35-.225-.575Q20.55 6 20.2 6ZM21 6h-1.65H21ZM3 6h1.65H3Z"/>
    </Icon>
  );
});

IconMaterialTabletW100.displayName = 'AmauiIconMaterialTabletW100';

export default IconMaterialTabletW100;
