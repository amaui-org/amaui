import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExtensionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExtensionW100Filled'

      short_name='Extension'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 19.7H4.3V15q.75-.325 1.225-1Q6 13.325 6 12.5T5.525 11q-.475-.675-1.225-1V5.3H9q.35-.8 1.012-1.25.663-.45 1.488-.45t1.488.45Q13.65 4.5 14 5.3h4.7V10q.8.35 1.25 1.012.45.663.45 1.488t-.45 1.488Q19.5 14.65 18.7 15v4.7H14q-.35-.8-1.025-1.25Q12.3 18 11.5 18t-1.475.45Q9.35 18.9 9 19.7Z"/>
    </Icon>
  );
});

IconMaterialExtensionW100Filled.displayName = 'AmauiIconMaterialExtensionW100Filled';

export default IconMaterialExtensionW100Filled;
