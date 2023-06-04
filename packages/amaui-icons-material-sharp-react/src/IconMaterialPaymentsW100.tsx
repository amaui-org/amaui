import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPaymentsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentsW100'

      short_name='Payments'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.35 12.25q-.725 0-1.213-.488-.487-.487-.487-1.212t.487-1.213q.488-.487 1.213-.487.725 0 1.212.487.488.488.488 1.213 0 .725-.488 1.212-.487.488-1.212.488ZM5.9 15.5V5.6h14.9v9.9Zm2.2-.7h10.5q0-.625.438-1.063.437-.437 1.062-.437V7.8q-.625 0-1.062-.437Q18.6 6.925 18.6 6.3H8.1q0 .625-.438 1.063Q7.225 7.8 6.6 7.8v5.5q.625 0 1.062.437.438.438.438 1.063Zm-4.9 3.4V8.55h.7v8.95h13.95v.7Zm3.4-3.4V6.3Z"/>
    </Icon>
  );
});

IconMaterialPaymentsW100.displayName = 'AmauiIconMaterialPaymentsW100';

export default IconMaterialPaymentsW100;
