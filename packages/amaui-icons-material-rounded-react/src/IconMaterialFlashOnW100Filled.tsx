import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOnW100Filled'

      short_name='FlashOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.025 20.6q-.15.275-.45.188-.3-.088-.3-.388V14h-1.9q-.325 0-.537-.213-.213-.212-.213-.537v-9q0-.325.213-.538.212-.212.537-.212h6.85q.425 0 .638.337.212.338.037.713l-3.025 6.8h2.2q.425 0 .65.375.225.375 0 .75Z"/>
    </Icon>
  );
});

IconMaterialFlashOnW100Filled.displayName = 'AmauiIconMaterialFlashOnW100Filled';

export default IconMaterialFlashOnW100Filled;
