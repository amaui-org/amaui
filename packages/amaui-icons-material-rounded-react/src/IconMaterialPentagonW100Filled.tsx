import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPentagonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PentagonW100Filled'

      short_name='Pentagon'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.975 20.35q-.225 0-.4-.138-.175-.137-.25-.337L2.95 9.75q-.075-.225-.012-.45.062-.225.262-.35l8.4-5.875q.1-.05.188-.088.087-.037.212-.037t.213.037q.087.038.187.088l8.4 5.875q.2.125.262.35.063.225-.012.45l-3.375 10.125q-.075.2-.25.337-.175.138-.4.138Z"/>
    </Icon>
  );
});

IconMaterialPentagonW100Filled.displayName = 'AmauiIconMaterialPentagonW100Filled';

export default IconMaterialPentagonW100Filled;
