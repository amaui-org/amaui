import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrontHandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontHandFilled'

      short_name='FrontHand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.775 24q-1.825 0-3.337-.688-1.513-.687-2.613-1.824-1.1-1.138-1.712-2.638-.613-1.5-.613-3.1V4.5H7V12h1V1.5h2.5V11h1V0H14v11h1V2h2.5v12.025q-1.55.2-2.525 1.338Q14 16.5 14 18h1q0-1.25.875-2.125T18 15h.5V8H21v7.75q0 1.6-.6 3.087-.6 1.488-1.688 2.638-1.087 1.15-2.599 1.837Q14.6 24 12.775 24Z"/>
    </Icon>
  );
});

IconMaterialFrontHandFilled.displayName = 'AmauiIconMaterialFrontHandFilled';

export default IconMaterialFrontHandFilled;
