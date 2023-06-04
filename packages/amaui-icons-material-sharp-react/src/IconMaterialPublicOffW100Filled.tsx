import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPublicOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublicOffW100Filled'

      short_name='PublicOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-3.675-3.675q-1.15.975-2.575 1.525-1.425.55-3.05.55-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12q0-1.625.55-3.05.55-1.425 1.525-2.575L2.25 3.25l.5-.5L21.8 21.8ZM11 19.95V18q-.825 0-1.412-.587Q9 16.825 9 16v-1l-4.8-4.8q-.075.45-.138.9Q4 11.55 4 12q0 3.025 1.988 5.3Q7.975 19.575 11 19.95Zm8.4-3.35-.525-.525q.55-.925.837-1.95Q20 13.1 20 12q0-2.475-1.35-4.513Q17.3 5.45 15 4.55V5q0 .825-.587 1.412Q13.825 7 13 7h-2v1.2L7.4 4.6q1-.625 2.162-.963Q10.725 3.3 12 3.3q1.8 0 3.388.687 1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.275-.337 2.438-.338 1.162-.963 2.162Z"/>
    </Icon>
  );
});

IconMaterialPublicOffW100Filled.displayName = 'AmauiIconMaterialPublicOffW100Filled';

export default IconMaterialPublicOffW100Filled;
