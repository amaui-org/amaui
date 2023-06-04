import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockW100Filled'

      short_name='Dock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 20.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-.2-2.7q-.65 0-1.075-.425Q7.3 17.35 7.3 16.7V4.3q0-.65.425-1.075Q8.15 2.8 8.8 2.8h6.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425ZM8 15.15h8v-9.3H8Z"/>
    </Icon>
  );
});

IconMaterialDockW100Filled.displayName = 'AmauiIconMaterialDockW100Filled';

export default IconMaterialDockW100Filled;
