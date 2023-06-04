import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial60fpsSelectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsSelectW100Filled'

      short_name='60fpsSelect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.45 12.7V5.3h5.05V6H6.15v2.65h4.35v4.05Zm.7-.7H9.8V9.35H6.15Zm7.35.7V5.3h5.05v7.4Zm.7-.7h3.65V6H14.2ZM4.1 21.35v-3.7h.7v3.7Zm3.2 0v-3.7H8v3.7Zm3.2 0v-3.7h.7v3.7Zm3.2 0v-3.7h6.2v3.7Z"/>
    </Icon>
  );
});

IconMaterial60fpsSelectW100Filled.displayName = 'AmauiIconMaterial60fpsSelectW100Filled';

export default IconMaterial60fpsSelectW100Filled;
