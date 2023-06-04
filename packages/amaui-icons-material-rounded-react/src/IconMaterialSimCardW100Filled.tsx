import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSimCardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardW100Filled'

      short_name='SimCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 17.6v.55q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-.55q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25Zm8 0v.55q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-.55q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25Zm-8-5.75v2.55q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-2.55q0-.15-.1-.25T8 11.5q-.15 0-.25.1t-.1.25Zm4 3.75v2.55q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V15.6q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25Zm0-3.75v.55q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-.55q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25Zm4 0v2.55q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25v-2.55q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25ZM6.8 20.7q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V9.175q0-.3.113-.575.112-.275.337-.5l4.35-4.35q.225-.225.5-.338.275-.112.575-.112H17.2q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSimCardW100Filled.displayName = 'AmauiIconMaterialSimCardW100Filled';

export default IconMaterialSimCardW100Filled;
