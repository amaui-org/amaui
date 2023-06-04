import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInfraredW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InfraredW100Filled'

      short_name='Infrared'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.75 19.75-.5-.5q1.4-1.4 2.2-3.262.8-1.863.8-3.988t-.8-3.988q-.8-1.862-2.2-3.262l.5-.5q1.5 1.5 2.35 3.487.85 1.988.85 4.263t-.85 4.262q-.85 1.988-2.35 3.488Zm-2.275-2.275-.5-.5q.95-.95 1.513-2.225.562-1.275.562-2.75t-.562-2.75q-.563-1.275-1.513-2.225l.5-.5q1.05 1.05 1.662 2.45.613 1.4.613 3.025t-.613 3.025q-.612 1.4-1.662 2.45Zm-2.25-2.25-.5-.5q.525-.525.825-1.225.3-.7.3-1.5t-.3-1.5q-.3-.7-.825-1.225l.5-.5q.625.625.975 1.45T10.55 12q0 .95-.35 1.775t-.975 1.45Zm-3.9 4.125V4.65h.7v6q.55.025.938.412.387.388.387.938 0 .55-.387.938-.388.387-.938.412v6Z"/>
    </Icon>
  );
});

IconMaterialInfraredW100Filled.displayName = 'AmauiIconMaterialInfraredW100Filled';

export default IconMaterialInfraredW100Filled;
