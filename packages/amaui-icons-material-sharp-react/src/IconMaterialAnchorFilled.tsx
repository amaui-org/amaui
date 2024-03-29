import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAnchorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AnchorFilled'

      short_name='Anchor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-1.525 0-3.125-.55t-2.9-1.5q-1.3-.95-2.138-2.225Q3 16.45 3 15v-3l4 3-1.55 1.55q.725 1.275 2.3 2.2 1.575.925 3.25 1.175V11H8V9h3V7.825q-.875-.325-1.438-1.088Q9 5.975 9 5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5q0 .975-.562 1.737Q13.875 7.5 13 7.825V9h3v2h-3v8.925q1.675-.25 3.25-1.175t2.3-2.2L17 15l4-3v3q0 1.45-.837 2.725-.838 1.275-2.138 2.225-1.3.95-2.9 1.5-1.6.55-3.125.55Zm0-16q.425 0 .713-.287Q13 5.425 13 5t-.287-.713Q12.425 4 12 4t-.712.287Q11 4.575 11 5t.288.713Q11.575 6 12 6Z"/>
    </Icon>
  );
});

IconMaterialAnchorFilled.displayName = 'AmauiIconMaterialAnchorFilled';

export default IconMaterialAnchorFilled;
