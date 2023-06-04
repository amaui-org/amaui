import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRequestPageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPageW100Filled'

      short_name='RequestPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 16.35q.15 0 .25-.1t.1-.25v-3q0-.15-.1-.25t-.25-.1h-3.65v-2.3H14q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.65V9q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v.65H10q-.15 0-.25.1t-.1.25v3q0 .15.1.25t.25.1h3.65v2.3H10q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h1.65V17q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-.65ZM6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h6.025q.3 0 .588.125.287.125.487.325l4.35 4.35q.2.2.325.487.125.288.125.588V19.2q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialRequestPageW100Filled.displayName = 'AmauiIconMaterialRequestPageW100Filled';

export default IconMaterialRequestPageW100Filled;
