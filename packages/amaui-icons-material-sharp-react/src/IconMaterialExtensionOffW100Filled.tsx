import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExtensionOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionOffW100Filled'

      short_name='ExtensionOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.85 20.85 18.7 19.7H14q-.35-.8-1.025-1.25Q12.3 18 11.5 18t-1.475.45Q9.35 18.9 9 19.7H4.3V15q.8-.35 1.25-1.012Q6 13.325 6 12.5t-.45-1.488Q5.1 10.35 4.3 10V5.3L3.15 4.15l.5-.5 16.7 16.7ZM18.7 15.9 8.1 5.3H9q.35-.8 1.012-1.25.663-.45 1.488-.45t1.488.45Q13.65 4.5 14 5.3h4.7V10q.8.35 1.25 1.012.45.663.45 1.488t-.45 1.488Q19.5 14.65 18.7 15Z"/>
    </Icon>
  );
});

IconMaterialExtensionOffW100Filled.displayName = 'AmauiIconMaterialExtensionOffW100Filled';

export default IconMaterialExtensionOffW100Filled;
