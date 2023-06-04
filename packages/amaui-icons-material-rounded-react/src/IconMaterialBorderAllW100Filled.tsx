import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllW100Filled'

      short_name='BorderAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.85 11.65q-.625 0-1.062-.438-.438-.437-.438-1.062V5.8q0-.625.438-1.063.437-.437 1.062-.437h4.35q.625 0 1.063.437.437.438.437 1.063v4.35q0 .625-.437 1.062-.438.438-1.063.438Zm-2.2-1.5q0 .625-.437 1.062-.438.438-1.063.438H5.8q-.625 0-1.062-.438-.438-.437-.438-1.062V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h4.35q.625 0 1.063.437.437.438.437 1.063Zm.7 3.7q0-.625.438-1.063.437-.437 1.062-.437h4.35q.625 0 1.063.437.437.438.437 1.063v4.35q0 .625-.437 1.062-.438.438-1.063.438h-4.35q-.625 0-1.062-.438-.438-.437-.438-1.062Zm-2.2-1.5q.625 0 1.063.437.437.438.437 1.063v4.35q0 .625-.437 1.062-.438.438-1.063.438H5.8q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2v-4.35q0-.625.438-1.063.437-.437 1.062-.437Z"/>
    </Icon>
  );
});

IconMaterialBorderAllW100Filled.displayName = 'AmauiIconMaterialBorderAllW100Filled';

export default IconMaterialBorderAllW100Filled;
