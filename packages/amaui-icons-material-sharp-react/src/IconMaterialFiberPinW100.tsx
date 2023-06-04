import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFiberPinW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberPinW100'

      short_name='FiberPin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.3 14.6h.7v-4.05l2.75 4.05h.75V9.4h-.7v4.05L15.1 9.4h-.8Zm-2.9 0h.7V9.4h-.7Zm-5.9 0h.7v-2.1h3.5V9.4H5.5Zm.7-2.8v-1.7H9v1.7Zm-2.9 6.9V5.3h17.4v13.4ZM4 18h16V6H4Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialFiberPinW100.displayName = 'AmauiIconMaterialFiberPinW100';

export default IconMaterialFiberPinW100;
