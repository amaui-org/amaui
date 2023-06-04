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
      <path d="M13.35 12.25q-.725 0-1.213-.488-.487-.487-.487-1.212t.487-1.213q.488-.487 1.213-.487.725 0 1.212.487.488.488.488 1.213 0 .725-.488 1.212-.487.488-1.212.488ZM7.4 15.5q-.625 0-1.062-.438Q5.9 14.625 5.9 14V7.1q0-.625.438-1.063Q6.775 5.6 7.4 5.6h11.9q.625 0 1.063.437.437.438.437 1.063V14q0 .625-.437 1.062-.438.438-1.063.438Zm.7-.7h10.5q0-.625.438-1.063.437-.437 1.062-.437V7.8q-.625 0-1.062-.437Q18.6 6.925 18.6 6.3H8.1q0 .625-.438 1.063Q7.225 7.8 6.6 7.8v5.5q.625 0 1.062.437.438.438.438 1.063Zm-3.4 3.4q-.625 0-1.062-.438Q3.2 17.325 3.2 16.7V8.9q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.8q0 .3.25.55.25.25.55.25h12.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm2.7-3.4h-.8V6.3h.8q-.325 0-.562.237-.238.238-.238.563V14q0 .325.238.562.237.238.562.238Z"/>
    </Icon>
  );
});

IconMaterialPaymentsW100.displayName = 'AmauiIconMaterialPaymentsW100';

export default IconMaterialPaymentsW100;
