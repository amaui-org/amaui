import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter4W100Filled'

      short_name='Filter4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.35 14.35q.15 0 .25-.1t.1-.25V5.975q0-.125-.1-.225t-.25-.1q-.15 0-.25.1T15 6v3.65h-3.3V5.975q0-.125-.1-.225t-.25-.1q-.15 0-.25.1T11 6v4q0 .15.1.25t.25.1H15v3.675q0 .125.1.225t.25.1Zm-7.2 2.35q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-2.7 2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.125q0-.125.1-.225t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225h10.775q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFilter4W100Filled.displayName = 'AmauiIconMaterialFilter4W100Filled';

export default IconMaterialFilter4W100Filled;
