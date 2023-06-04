import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockW100'

      short_name='Dock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 20.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-.2-2.7q-.65 0-1.075-.425Q7.3 17.35 7.3 16.7V4.3q0-.65.425-1.075Q8.15 2.8 8.8 2.8h6.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425ZM8 15.85v.85q0 .35.225.575.225.225.575.225h6.4q.35 0 .575-.225Q16 17.05 16 16.7v-.85Zm0 0v1.65-1.65Zm0-.7h8v-9.3H8Zm0-10h8V4.3q0-.35-.225-.575Q15.55 3.5 15.2 3.5H8.8q-.35 0-.575.225Q8 3.95 8 4.3Zm0 0V3.5 4.3Z"/>
    </Icon>
  );
});

IconMaterialDockW100.displayName = 'AmauiIconMaterialDockW100';

export default IconMaterialDockW100;
