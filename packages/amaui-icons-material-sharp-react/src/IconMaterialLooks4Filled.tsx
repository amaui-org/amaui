import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4Filled'

      short_name='Looks4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm10-4h2V7h-2v4h-2V7H9v6h4Z"/>
    </Icon>
  );
});

IconMaterialLooks4Filled.displayName = 'AmauiIconMaterialLooks4Filled';

export default IconMaterialLooks4Filled;
