import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEscalatorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorW100Filled'

      short_name='Escalator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16.85h2.7l5-9H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-2.7l-5 9H7q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialEscalatorW100Filled.displayName = 'AmauiIconMaterialEscalatorW100Filled';

export default IconMaterialEscalatorW100Filled;
