import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanW100Filled'

      short_name='Lan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.35 21.35q-.275 0-.487-.212-.213-.213-.213-.488v-4.3q0-.275.213-.487.212-.213.487-.213h2.3v-3.3q0-.275.213-.488.212-.212.487-.212h4.3v-3.3h-2.3q-.275 0-.487-.213-.213-.212-.213-.487v-4.3q0-.275.213-.488.212-.212.487-.212h5.3q.275 0 .488.212.212.213.212.488v4.3q0 .275-.212.487-.213.213-.488.213h-2.3v3.3h4.3q.275 0 .488.212.212.213.212.488v3.3h2.3q.275 0 .488.213.212.212.212.487v4.3q0 .275-.212.488-.213.212-.488.212h-5.3q-.275 0-.487-.212-.213-.213-.213-.488v-4.3q0-.275.213-.487.212-.213.487-.213h2.3v-3.3h-9.3v3.3h2.3q.275 0 .488.213.212.212.212.487v4.3q0 .275-.212.488-.213.212-.488.212Z"/>
    </Icon>
  );
});

IconMaterialLanW100Filled.displayName = 'AmauiIconMaterialLanW100Filled';

export default IconMaterialLanW100Filled;
