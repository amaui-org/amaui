import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGradingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradingW100Filled'

      short_name='Grading'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 8.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 3.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 3.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 3.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm12.175-.525-1.45-1.45q-.1-.1-.088-.237.013-.138.113-.238.1-.1.238-.1.137 0 .237.1l1.175 1.2 2.95-2.95q.1-.1.238-.112.137-.013.262.112t.125.25q0 .125-.125.25l-3.175 3.175q-.1.1-.25.1t-.25-.1ZM4 4.95q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialGradingW100Filled.displayName = 'AmauiIconMaterialGradingW100Filled';

export default IconMaterialGradingW100Filled;
