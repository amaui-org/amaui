import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarehouseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarehouseW100'

      short_name='Warehouse'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 5.15-7.5 3q-.225.1-.362.3Q4 8.65 4 8.9v9.3q0 .35.225.575Q4.45 19 4.8 19h2.5v-7.3q0-.275.213-.488Q7.725 11 8 11h8q.275 0 .488.212.212.213.212.488V19h2.5q.35 0 .575-.225Q20 18.55 20 18.2V8.9q0-.25-.137-.45-.138-.2-.363-.3ZM8 19.7H4.8q-.625 0-1.063-.438Q3.3 18.825 3.3 18.2V8.9q0-.475.262-.85.263-.375.688-.55l7.2-2.875q.275-.125.55-.125t.55.125l7.2 2.875q.425.175.688.55.262.375.262.85v9.3q0 .625-.437 1.062-.438.438-1.063.438H16v-8H8Zm1.725 0v-1.4h1.4v1.4Zm1.575-3v-1.4h1.4v1.4Zm1.575 3v-1.4h1.4v1.4ZM16 11H8h8Z"/>
    </Icon>
  );
});

IconMaterialWarehouseW100.displayName = 'AmauiIconMaterialWarehouseW100';

export default IconMaterialWarehouseW100;
