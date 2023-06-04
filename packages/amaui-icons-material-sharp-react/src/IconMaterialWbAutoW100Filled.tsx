import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbAutoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbAutoW100Filled'

      short_name='WbAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.525 15h.75l.75-2.05h2.8l.75 2.05h.8l-2.7-7h-.45Zm1.75-2.65 1.1-3.05h.1l1.1 3.05Zm1.15 5.35q-2.375 0-4.037-1.662Q2.725 14.375 2.725 12t1.663-4.037Q6.05 6.3 8.425 6.3q2 0 3.55 1.225 1.55 1.225 2 3.175l-.7-2.7h.8l1.3 5.6h.05l1.45-5.6h.75l1.45 5.6h.05l1.3-5.6h.85l-1.75 7h-.75l-1.5-5.75h-.05l-1.5 5.75h-.7l-1.05-4.3q.65 2.7-1.062 4.85Q11.2 17.7 8.425 17.7Z"/>
    </Icon>
  );
});

IconMaterialWbAutoW100Filled.displayName = 'AmauiIconMaterialWbAutoW100Filled';

export default IconMaterialWbAutoW100Filled;
