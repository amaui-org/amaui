import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewStreamW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStreamW100Filled'

      short_name='ViewStream'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 11.65q-.625 0-1.062-.438-.438-.437-.438-1.062V7.8q0-.625.438-1.062Q5.175 6.3 5.8 6.3h12.4q.625 0 1.063.438.437.437.437 1.062v2.35q0 .625-.437 1.062-.438.438-1.063.438Zm0 6.05q-.625 0-1.062-.438Q4.3 16.825 4.3 16.2v-2.35q0-.625.438-1.063.437-.437 1.062-.437h12.4q.625 0 1.063.437.437.438.437 1.063v2.35q0 .625-.437 1.062-.438.438-1.063.438Z"/>
    </Icon>
  );
});

IconMaterialViewStreamW100Filled.displayName = 'AmauiIconMaterialViewStreamW100Filled';

export default IconMaterialViewStreamW100Filled;
