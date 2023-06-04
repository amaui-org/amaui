import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSystemUpdateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateW100Filled'

      short_name='SystemUpdate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.1 8.9 12l.5-.5 2.25 2.25V8.9h.7v4.85l2.25-2.25.5.5Zm-5.7 6.6V2.3h11.4v19.4Zm.7-3.05h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateW100Filled.displayName = 'AmauiIconMaterialSystemUpdateW100Filled';

export default IconMaterialSystemUpdateW100Filled;
