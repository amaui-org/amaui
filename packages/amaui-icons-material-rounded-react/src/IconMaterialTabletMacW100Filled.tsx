import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabletMacW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletMacW100Filled'

      short_name='TabletMac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 21.7q-.625 0-1.062-.438Q4.3 20.825 4.3 20.2V3.8q0-.625.438-1.063Q5.175 2.3 5.8 2.3h12.4q.625 0 1.063.437.437.438.437 1.063v16.4q0 .625-.437 1.062-.438.438-1.063.438Zm-.8-5h14V5.35H5Zm7 3.2q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q12.275 18.5 12 18.5t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212Z"/>
    </Icon>
  );
});

IconMaterialTabletMacW100Filled.displayName = 'AmauiIconMaterialTabletMacW100Filled';

export default IconMaterialTabletMacW100Filled;
