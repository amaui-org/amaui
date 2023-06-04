import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPausePresentationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationW100Filled'

      short_name='PausePresentation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.4 15.35q.15 0 .25-.1t.1-.25V9q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v6q0 .15.1.25t.25.1Zm3.2 0q.15 0 .25-.1t.1-.25V9q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v6q0 .15.1.25t.25.1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialPausePresentationW100Filled.displayName = 'AmauiIconMaterialPausePresentationW100Filled';

export default IconMaterialPausePresentationW100Filled;
