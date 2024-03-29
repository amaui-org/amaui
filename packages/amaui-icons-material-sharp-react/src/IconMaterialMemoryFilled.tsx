import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMemoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemoryFilled'

      short_name='Memory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21v-2H5v-4H3v-2h2v-2H3V9h2V5h4V3h2v2h2V3h2v2h4v4h2v2h-2v2h2v2h-2v4h-4v2h-2v-2h-2v2Zm-2-4h10V7H7Zm2-2V9h6v6Z"/>
    </Icon>
  );
});

IconMaterialMemoryFilled.displayName = 'AmauiIconMaterialMemoryFilled';

export default IconMaterialMemoryFilled;
