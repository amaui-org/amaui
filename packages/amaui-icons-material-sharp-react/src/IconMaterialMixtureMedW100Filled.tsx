import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMixtureMedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MixtureMedW100Filled'

      short_name='MixtureMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.1 20.45-.7-.525V16.2H6.3q-.625 0-1.062-.438Q4.8 15.325 4.8 14.7V7.5h-.7v-.7h3.3V5H6.15v-.7h3.2V5H8.1v1.8h3.3v.7h-.7v7.2q0 .625-.437 1.062-.438.438-1.063.438H8.1Zm8.15-.55q-1.225 0-2.087-.862-.863-.863-.863-2.088v-6.7q0-1.225.863-2.088.862-.862 2.087-.862t2.088.862q.862.863.862 2.088v6.7q0 1.225-.862 2.088-.863.862-2.088.862ZM6.3 15.5h2.9q.35 0 .575-.225Q10 15.05 10 14.7v-1.4H7.65v-.7H10v-2.2H7.65v-.7H10V7.5H5.5v7.2q0 .35.225.575.225.225.575.225Zm7.7.1h4.5v-4H14Z"/>
    </Icon>
  );
});

IconMaterialMixtureMedW100Filled.displayName = 'AmauiIconMaterialMixtureMedW100Filled';

export default IconMaterialMixtureMedW100Filled;
