import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhpW100Filled'

      short_name='Php'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 14.6q-.15 0-.25-.1t-.1-.25v-4.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h2.8V9.75q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.5q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V12.1h-2.8v2.15q0 .15-.1.25t-.25.1Zm-6.6 0q-.15 0-.25-.1t-.1-.25v-4.1q0-.325.213-.538.212-.212.537-.212h2.75q.3 0 .5.225t.2.525V12q0 .3-.2.5t-.5.2h-2.8v1.55q0 .15-.1.25t-.25.1Zm.35-2.6h2.8v-1.85h-2.8Zm12.9 2.6q-.15 0-.25-.1t-.1-.25v-4.1q0-.325.213-.538.212-.212.537-.212h2.75q.3 0 .5.225t.2.525V12q0 .3-.2.5t-.5.2h-2.8v1.55q0 .15-.1.25t-.25.1Zm.35-2.6h2.8v-1.85h-2.8Z"/>
    </Icon>
  );
});

IconMaterialPhpW100Filled.displayName = 'AmauiIconMaterialPhpW100Filled';

export default IconMaterialPhpW100Filled;
