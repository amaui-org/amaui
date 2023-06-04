import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbAutoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbAutoW100'

      short_name='WbAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.525 15h.75l.75-2.05h2.8l.75 2.05h.8l-2.7-7h-.45Zm1.75-2.65 1.1-3.05h.1l1.1 3.05Zm1.15 5.35q-2.375 0-4.037-1.662Q2.725 14.375 2.725 12t1.663-4.037Q6.05 6.3 8.425 6.3q2 0 3.55 1.225 1.55 1.225 2 3.175l-.7-2.7h.8l1.3 5.6h.05l1.45-5.6h.75l1.45 5.6h.05l1.3-5.6h.85l-1.75 7h-.75l-1.5-5.75h-.05l-1.5 5.75h-.7l-1.05-4.3q.65 2.7-1.062 4.85Q11.2 17.7 8.425 17.7Zm0-.7q2.075 0 3.538-1.463 1.462-1.462 1.462-3.537t-1.462-3.538Q10.5 7 8.425 7 6.35 7 4.888 8.462 3.425 9.925 3.425 12q0 2.075 1.463 3.537Q6.35 17 8.425 17Zm0-5Z"/>
    </Icon>
  );
});

IconMaterialWbAutoW100.displayName = 'AmauiIconMaterialWbAutoW100';

export default IconMaterialWbAutoW100;
