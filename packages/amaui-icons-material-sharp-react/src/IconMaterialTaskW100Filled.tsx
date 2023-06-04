import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTaskW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskW100Filled'

      short_name='Task'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 16.525 4.75-4.75-.5-.5-4.25 4.25-2.15-2.15-.5.5ZM5.3 20.7V3.3h9.35l4.05 4.05V20.7Zm9-13H18L14.3 4Z"/>
    </Icon>
  );
});

IconMaterialTaskW100Filled.displayName = 'AmauiIconMaterialTaskW100Filled';

export default IconMaterialTaskW100Filled;
