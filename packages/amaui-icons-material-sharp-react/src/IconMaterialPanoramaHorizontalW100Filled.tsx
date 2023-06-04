import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaHorizontalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontalW100Filled'

      short_name='PanoramaHorizontal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.55V5.5q2.025.575 4.038.962Q9.35 6.85 12 6.85t4.663-.388q2.012-.387 4.037-.962v13.05q-2.025-.575-4.037-.937Q14.65 17.25 12 17.25q-2.65 0-4.662.363-2.013.362-4.038.937Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontalW100Filled.displayName = 'AmauiIconMaterialPanoramaHorizontalW100Filled';

export default IconMaterialPanoramaHorizontalW100Filled;
