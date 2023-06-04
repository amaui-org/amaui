import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCachedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CachedW100'

      short_name='Cached'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.05 19.35q-3.075 0-5.238-2.15Q4.65 15.05 4.65 12v-1.75L2.4 12.5l-.5-.5L5 8.9 8.1 12l-.5.5-2.25-2.25V12q0 2.775 1.95 4.712 1.95 1.938 4.75 1.938.575 0 1.188-.112.612-.113 1.187-.338l.525.525q-.675.3-1.412.463-.738.162-1.488.162ZM19 15.1 15.9 12l.5-.5 2.25 2.25V12q0-2.775-1.95-4.713-1.95-1.937-4.75-1.937-.575 0-1.188.112-.612.113-1.187.338l-.525-.525q.675-.3 1.413-.463.737-.162 1.487-.162 3.075 0 5.238 2.15Q19.35 8.95 19.35 12v1.75l2.25-2.25.5.5Z"/>
    </Icon>
  );
});

IconMaterialCachedW100.displayName = 'AmauiIconMaterialCachedW100';

export default IconMaterialCachedW100;
