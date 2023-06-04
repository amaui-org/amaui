import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMemoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemoryW100Filled'

      short_name='Memory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 19.1v-1.4H6.3v-3.35H4.9v-.7h1.4v-3.3H4.9v-.7h1.4V6.3h3.35V4.9h.7v1.4h3.3V4.9h.7v1.4h3.35v3.35h1.4v.7h-1.4v3.3h1.4v.7h-1.4v3.35h-3.35v1.4h-.7v-1.4h-3.3v1.4ZM7 17h10V7H7Zm3.3-3.3v-3.4h3.4v3.4Z"/>
    </Icon>
  );
});

IconMaterialMemoryW100Filled.displayName = 'AmauiIconMaterialMemoryW100Filled';

export default IconMaterialMemoryW100Filled;
