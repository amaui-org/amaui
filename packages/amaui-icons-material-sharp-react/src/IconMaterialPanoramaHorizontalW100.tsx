import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanoramaHorizontalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanoramaHorizontalW100'

      short_name='PanoramaHorizontal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17.65q1.95-.575 3.963-.862Q9.975 16.5 12 16.5t4.038.288q2.012.287 3.962.862V6.4q-1.95.575-3.962.837Q14.025 7.5 12 7.5q-2.025 0-4.037-.263Q5.95 6.975 4 6.4Zm8-5.625ZM3.3 18.55V5.5q2.025.575 4.038.962Q9.35 6.85 12 6.85t4.663-.388q2.012-.387 4.037-.962v13.05q-2.025-.575-4.037-.937Q14.65 17.25 12 17.25q-2.65 0-4.662.363-2.013.362-4.038.937Z"/>
    </Icon>
  );
});

IconMaterialPanoramaHorizontalW100.displayName = 'AmauiIconMaterialPanoramaHorizontalW100';

export default IconMaterialPanoramaHorizontalW100;
