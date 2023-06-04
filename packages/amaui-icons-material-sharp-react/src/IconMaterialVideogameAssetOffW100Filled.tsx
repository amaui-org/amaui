import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideogameAssetOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideogameAssetOffW100Filled'

      short_name='VideogameAssetOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 16.7V7.3h4l7.05 7.05h-1L3.15 4.15l.5-.5 16.7 16.7-.5.5-4.15-4.15Zm6.8-9.4h10.6v9.375h-1.225Zm7.4 2.35q-.35 0-.6.25t-.25.6q0 .35.25.6t.6.25q.35 0 .6-.25t.25-.6q0-.35-.25-.6t-.6-.25Zm-9.85 4.7h.7v-2h2v-.7h-2v-2h-.7v2h-2v.7h2Z"/>
    </Icon>
  );
});

IconMaterialVideogameAssetOffW100Filled.displayName = 'AmauiIconMaterialVideogameAssetOffW100Filled';

export default IconMaterialVideogameAssetOffW100Filled;
