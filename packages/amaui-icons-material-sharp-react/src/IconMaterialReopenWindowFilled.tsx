import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReopenWindowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReopenWindowFilled'

      short_name='ReopenWindow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h800v360h-80V416H160v400h320v80H80Zm680 160q-73 0-127.5-45.5T564 896h62q13 44 49.5 72t84.5 28q58 0 99-41t41-99q0-58-41-99t-99-41q-29 0-54 10.5T662 756h58v60H560V656h60v57q27-26 63-41.5t77-15.5q83 0 141.5 58.5T960 856q0 83-58.5 141.5T760 1056Z"/>
    </Icon>
  );
});

IconMaterialReopenWindowFilled.displayName = 'AmauiIconMaterialReopenWindowFilled';

export default IconMaterialReopenWindowFilled;
