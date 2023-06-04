import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPublicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublicW100Filled'

      short_name='Public'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm-1-.75V18q-.825 0-1.412-.587Q9 16.825 9 16v-1l-4.8-4.8q-.075.45-.138.9Q4 11.55 4 12q0 3.025 1.988 5.3Q7.975 19.575 11 19.95Zm6.9-2.55q1.025-1.125 1.562-2.513Q20 13.5 20 12q0-2.475-1.35-4.513Q17.3 5.45 15 4.55V5q0 .825-.587 1.412Q13.825 7 13 7h-2v2q0 .425-.287.712Q10.425 10 10 10H8v2h6q.425 0 .713.287.287.288.287.713v3h1q.65 0 1.175.387.525.388.725 1.013Z"/>
    </Icon>
  );
});

IconMaterialPublicW100Filled.displayName = 'AmauiIconMaterialPublicW100Filled';

export default IconMaterialPublicW100Filled;
