import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberNewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberNewW100'

      short_name='FiberNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 14.6h.7v-4.15l2.75 4.15h.75V9.4h-.7v4.15L4.8 9.4H4Zm5.9 0h3.2v-.7h-2.5v-1.5h2.5v-.7h-2.5v-1.6h2.5v-.7H9.9Zm4.9 0H20V9.4h-.7v4.5h-1.55v-3.5h-.7v3.5H15.5V9.4h-.7ZM2.3 18.7V5.3h19.4v13.4ZM3 18h18V6H3Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialFiberNewW100.displayName = 'AmauiIconMaterialFiberNewW100';

export default IconMaterialFiberNewW100;
