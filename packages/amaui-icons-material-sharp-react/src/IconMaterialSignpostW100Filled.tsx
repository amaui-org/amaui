import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignpostW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignpostW100Filled'

      short_name='Signpost'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 20.7v-4H6.275l-2.35-2.35L6.275 12h5.375v-2h-7V5.3h7v-2h.7v2h5.375l2.35 2.35-2.35 2.35H12.35v2h7v4.7h-7v4Z"/>
    </Icon>
  );
});

IconMaterialSignpostW100Filled.displayName = 'AmauiIconMaterialSignpostW100Filled';

export default IconMaterialSignpostW100Filled;
