import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEscalatorWarningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorWarningW100Filled'

      short_name='EscalatorWarning'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.8 5.75q-.65 0-1.125-.475T6.2 4.15q0-.65.475-1.125T7.8 2.55q.65 0 1.125.475T9.4 4.15q0 .65-.475 1.125T7.8 5.75Zm8.75 5.65q-.5 0-.875-.363-.375-.362-.375-.887 0-.55.375-.9t.875-.35q.55 0 .9.35t.35.875q0 .55-.35.912-.35.363-.9.363Zm-9.7 9.95q-.325 0-.538-.212-.212-.213-.212-.538v-5.7h-.95q-.325 0-.537-.212-.213-.213-.213-.538v-5.1q0-.625.438-1.063.437-.437 1.062-.437h2.9q.5 0 .888.288.387.287.537.762l2.175 6.725 2.675-2.525q.175-.15.363-.225.187-.075.412-.075h1.7q.475 0 .813.337.337.338.337.813v2.7q0 .325-.212.538-.213.212-.538.212h-.25v3.5q0 .325-.212.538-.213.212-.538.212h-.8q-.325 0-.537-.212-.213-.213-.213-.538v-7.15l-2.075 1.95q-.125.1-.237.15-.113.05-.263.05h-.675q-.25 0-.45-.15t-.275-.375l-1.925-6V20.6q0 .325-.212.538-.213.212-.538.212Z"/>
    </Icon>
  );
});

IconMaterialEscalatorWarningW100Filled.displayName = 'AmauiIconMaterialEscalatorWarningW100Filled';

export default IconMaterialEscalatorWarningW100Filled;
