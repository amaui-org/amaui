import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllOutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllOutW100Filled'

      short_name='AllOut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19.7q-.3 0-.5-.2t-.2-.5v-2q0-.15.1-.25t.25-.1q.15 0 .25.1T5 17v2h2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm12 0q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T17 19h2v-2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2q0 .3-.2.5t-.5.2Zm-5-2q-2.375 0-4.037-1.662Q6.3 14.375 6.3 12t1.663-4.037Q9.625 6.3 12 6.3t4.038 1.663Q17.7 9.625 17.7 12t-1.662 4.038Q14.375 17.7 12 17.7ZM4.65 7.35q-.15 0-.25-.1T4.3 7V5q0-.3.2-.5t.5-.2h2q.15 0 .25.1t.1.25q0 .15-.1.25T7 5H5v2q0 .15-.1.25t-.25.1Zm14.7 0q-.15 0-.25-.1T19 7V5h-2q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2q.3 0 .5.2t.2.5v2q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAllOutW100Filled.displayName = 'AmauiIconMaterialAllOutW100Filled';

export default IconMaterialAllOutW100Filled;
