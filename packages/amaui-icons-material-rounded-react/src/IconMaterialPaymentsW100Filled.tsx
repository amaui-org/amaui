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
      <path d="M13.35 12.25q.725 0 1.212-.488.488-.487.488-1.212t-.488-1.213q-.487-.487-1.212-.487t-1.213.487q-.487.488-.487 1.213 0 .725.487 1.212.488.488 1.213.488ZM7.4 15.5q-.625 0-1.062-.438Q5.9 14.625 5.9 14V7.1q0-.625.438-1.063Q6.775 5.6 7.4 5.6h11.9q.625 0 1.063.437.437.438.437 1.063V14q0 .625-.437 1.062-.438.438-1.063.438Zm-2.7 2.7q-.625 0-1.062-.438Q3.2 17.325 3.2 16.7V8.9q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.8q0 .3.25.55.25.25.55.25h12.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM6.6 7.8q.625 0 1.062-.437Q8.1 6.925 8.1 6.3h-.7q-.325 0-.562.237-.238.238-.238.563Zm13.5 0v-.7q0-.325-.237-.563-.238-.237-.563-.237h-.7q0 .625.438 1.063.437.437 1.062.437Zm-12.7 7h.7q0-.625-.438-1.063Q7.225 13.3 6.6 13.3v.7q0 .325.238.562.237.238.562.238Zm11.2 0h.7q.325 0 .563-.238.237-.237.237-.562v-.7q-.625 0-1.062.437-.438.438-.438 1.063Z"/>
    </Icon>
  );
});

IconMaterialPaymentsW100Filled.displayName = 'AmauiIconMaterialPaymentsW100Filled';

export default IconMaterialPaymentsW100Filled;
