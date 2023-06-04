import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSystemUpdateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateW100'

      short_name='SystemUpdate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.1 8.9 12l.5-.5 2.25 2.25V8.9h.7v4.85l2.25-2.25.5.5Zm-5.7 6.6V2.3h11.4v19.4Zm.7-3.05h10V5.35H7ZM7 21h10v-1.65H7ZM7 4.65h10V3H7Zm0 0V3v1.65ZM7 21v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateW100.displayName = 'AmauiIconMaterialSystemUpdateW100';

export default IconMaterialSystemUpdateW100;
