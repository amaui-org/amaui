import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoggyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoggyW100Filled'

      short_name='Foggy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 18.5q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.363.15-.137.35-.137.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15Zm-11 3q-.2 0-.35-.15-.15-.15-.15-.35 0-.225.15-.363.15-.137.35-.137.225 0 .363.137.137.138.137.363 0 .2-.137.35-.138.15-.363.15Zm-1-3.15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h9q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm4 3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-2.5-6q-2.025 0-3.438-1.412Q2.65 12.525 2.65 10.5q0-1.9 1.288-3.275Q5.225 5.85 7.175 5.65q.725-1.4 1.988-2.2 1.262-.8 2.837-.8 2.125 0 3.638 1.425 1.512 1.425 1.737 3.55 1.875.1 2.925 1.237Q21.35 10 21.35 11.5q0 1.6-1.125 2.725T17.5 15.35Z"/>
    </Icon>
  );
});

IconMaterialFoggyW100Filled.displayName = 'AmauiIconMaterialFoggyW100Filled';

export default IconMaterialFoggyW100Filled;
