import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddBoxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxW100Filled'

      short_name='AddBox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.35q.15 0 .25-.1t.1-.25v-3.65H16q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.65V8q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v3.65H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h3.65V16q0 .15.1.25t.25.1ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialAddBoxW100Filled.displayName = 'AmauiIconMaterialAddBoxW100Filled';

export default IconMaterialAddBoxW100Filled;
