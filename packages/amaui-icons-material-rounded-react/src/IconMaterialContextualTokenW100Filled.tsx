import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContextualTokenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContextualTokenW100Filled'

      short_name='ContextualToken'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M310-354h153.92q13.08 0 21.58-8.63 8.5-8.62 8.5-21.37v-6q0-12.75-8.62-21.38Q476.75-420 464-420H310.08q-13.08 0-21.58 8.62-8.5 8.63-8.5 21.38v6q0 12.75 8.63 21.37Q297.25-354 310-354Zm334 0h6q12.75 0 21.38-8.63Q680-371.25 680-384v-192q0-12.75-8.62-21.38Q662.75-606 650-606h-6q-12.75 0-21.37 8.62Q614-588.75 614-576v192q0 12.75 8.63 21.37Q631.25-354 644-354ZM310-540h153.92q13.08 0 21.58-8.63 8.5-8.62 8.5-21.37v-6q0-12.75-8.62-21.38Q476.75-606 464-606H310.08q-13.08 0-21.58 8.62-8.5 8.63-8.5 21.38v6q0 12.75 8.63 21.37Q297.25-540 310-540ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialContextualTokenW100Filled.displayName = 'AmauiIconMaterialContextualTokenW100Filled';

export default IconMaterialContextualTokenW100Filled;
