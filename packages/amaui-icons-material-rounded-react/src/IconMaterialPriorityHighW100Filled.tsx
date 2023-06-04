import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPriorityHighW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriorityHighW100Filled'

      short_name='PriorityHigh'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.2q-.3 0-.5-.2t-.2-.5q0-.3.2-.5t.5-.2q.3 0 .5.2t.2.5q0 .3-.2.5t-.5.2Zm0-3.15q-.15 0-.25-.1t-.1-.25V4.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v9.85q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialPriorityHighW100Filled.displayName = 'AmauiIconMaterialPriorityHighW100Filled';

export default IconMaterialPriorityHighW100Filled;
