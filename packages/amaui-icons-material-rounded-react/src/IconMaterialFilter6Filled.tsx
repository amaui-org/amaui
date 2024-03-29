import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter6Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter6Filled'

      short_name='Filter6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V6.975q0-.425.288-.7Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13.025q.425 0 .7.288.275.287.275.712t-.288.712Q17.425 22 17 22Zm4-4q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm5-9V7h2.025q.425 0 .7-.287Q16 6.425 16 6t-.287-.713Q15.425 5 15 5h-2q-.825 0-1.412.588Q11 6.175 11 7v6q0 .825.588 1.412Q12.175 15 13 15h2q.825 0 1.413-.588Q17 13.825 17 13v-2q0-.825-.587-1.413Q15.825 9 15 9Zm0 2h2v2h-2Z"/>
    </Icon>
  );
});

IconMaterialFilter6Filled.displayName = 'AmauiIconMaterialFilter6Filled';

export default IconMaterialFilter6Filled;
