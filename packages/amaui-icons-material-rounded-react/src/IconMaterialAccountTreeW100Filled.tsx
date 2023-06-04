import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountTreeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountTreeW100Filled'

      short_name='AccountTree'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.35 20.35q-.275 0-.487-.212-.213-.213-.213-.488v-2.3h-3.3q-.275 0-.487-.212-.213-.213-.213-.488v-9.3h-3.3v2.3q0 .275-.213.487-.212.213-.487.213h-4.3q-.275 0-.487-.213-.213-.212-.213-.487v-5.3q0-.275.213-.488.212-.212.487-.212h4.3q.275 0 .487.212.213.213.213.488v2.3h7.3v-2.3q0-.275.213-.488.212-.212.487-.212h4.3q.275 0 .488.212.212.213.212.488v5.3q0 .275-.212.487-.213.213-.488.213h-4.3q-.275 0-.487-.213-.213-.212-.213-.487v-2.3h-3.3v9.3h3.3v-2.3q0-.275.213-.488.212-.212.487-.212h4.3q.275 0 .488.212.212.213.212.488v5.3q0 .275-.212.488-.213.212-.488.212Z"/>
    </Icon>
  );
});

IconMaterialAccountTreeW100Filled.displayName = 'AmauiIconMaterialAccountTreeW100Filled';

export default IconMaterialAccountTreeW100Filled;
