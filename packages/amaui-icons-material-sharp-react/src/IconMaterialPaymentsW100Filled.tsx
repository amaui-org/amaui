import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPaymentsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentsW100Filled'

      short_name='Payments'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.35 12.25q.725 0 1.212-.488.488-.487.488-1.212t-.488-1.213q-.487-.487-1.212-.487t-1.213.487q-.487.488-.487 1.213 0 .725.487 1.212.488.488 1.213.488ZM5.9 15.5V5.6h14.9v9.9Zm-2.7 2.7V8.55h.7v8.95h13.95v.7ZM6.6 7.8q.625 0 1.062-.437Q8.1 6.925 8.1 6.3H6.6Zm13.5 0V6.3h-1.5q0 .625.438 1.063.437.437 1.062.437Zm-1.5 7h1.5v-1.5q-.625 0-1.062.437-.438.438-.438 1.063Zm-12 0h1.5q0-.625-.438-1.063Q7.225 13.3 6.6 13.3Z"/>
    </Icon>
  );
});

IconMaterialPaymentsW100Filled.displayName = 'AmauiIconMaterialPaymentsW100Filled';

export default IconMaterialPaymentsW100Filled;
