import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRequestPageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPageW100'

      short_name='RequestPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 16.35q.15 0 .25-.1t.1-.25v-3q0-.15-.1-.25t-.25-.1h-3.65v-2.3H14q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.65V9q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v.65H10q-.15 0-.25.1t-.1.25v3q0 .15.1.25t.25.1h3.65v2.3H10q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h1.65V17q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-.65ZM6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h6.025q.3 0 .575.112.275.113.5.338l4.35 4.35q.225.225.337.5.113.275.113.575V19.2q0 .65-.425 1.075-.425.425-1.075.425Zm10.4-.7q.3 0 .55-.25.25-.25.25-.55V8.85L13.15 4H6.8q-.3 0-.55.25Q6 4.5 6 4.8v14.4q0 .3.25.55.25.25.55.25ZM6 20V4v16Z"/>
    </Icon>
  );
});

IconMaterialRequestPageW100.displayName = 'AmauiIconMaterialRequestPageW100';

export default IconMaterialRequestPageW100;
