import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbAuto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbAuto'

      short_name='WbAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.825 15h1.2l.65-1.8h2.8l.65 1.8h1.2l-2.6-7h-1.3Zm2.2-2.8 1-2.9h.1l1 2.9Zm1.05 6.8q-2.925 0-4.962-2.038Q1.075 14.925 1.075 12t2.038-4.963Q5.15 5 8.075 5q1.875 0 3.463.925 1.587.925 2.537 2.525l-.1-.45h1.2l1.2 5.1h.05l1.45-5.1h1.1l1.45 5.1h.1l1.2-5.1h1.2l-1.85 7h-1.15l-1.5-5.25h-.05L16.925 15h-1.15l-.7-2.9q0 2.875-2.05 4.888Q10.975 19 8.075 19Zm0-2q2.075 0 3.538-1.463 1.462-1.462 1.462-3.537t-1.462-3.538Q10.15 7 8.075 7 6 7 4.537 8.462 3.075 9.925 3.075 12q0 2.075 1.462 3.537Q6 17 8.075 17Zm0-5Z"/>
    </Icon>
  );
});

IconMaterialWbAuto.displayName = 'AmauiIconMaterialWbAuto';

export default IconMaterialWbAuto;
