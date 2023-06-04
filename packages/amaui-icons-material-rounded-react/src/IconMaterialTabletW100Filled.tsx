import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletW100Filled'

      short_name='Tablet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 18.7q-.625 0-1.062-.438Q2.3 17.825 2.3 17.2V6.8q0-.625.438-1.062Q3.175 5.3 3.8 5.3h16.4q.625 0 1.063.438.437.437.437 1.062v10.4q0 .625-.437 1.062-.438.438-1.063.438Zm1.55-.7h13.3V6H5.35Z"/>
    </Icon>
  );
});

IconMaterialTabletW100Filled.displayName = 'AmauiIconMaterialTabletW100Filled';

export default IconMaterialTabletW100Filled;
