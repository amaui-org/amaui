import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter4Filled'

      short_name='Filter4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 15q.425 0 .712-.288Q17 14.425 17 14V5.975q0-.425-.288-.7Q16.425 5 16 5t-.712.287Q15 5.575 15 6v3h-2V5.975q0-.425-.287-.7Q12.425 5 12 5t-.712.287Q11 5.575 11 6v4q0 .425.288.712.287.288.712.288h3v3.025q0 .425.288.7.287.275.712.275Zm-8 3q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm-4 4q-.825 0-1.412-.587Q2 20.825 2 20V6.975q0-.425.288-.7Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13.025q.425 0 .7.288.275.287.275.712t-.288.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialFilter4Filled.displayName = 'AmauiIconMaterialFilter4Filled';

export default IconMaterialFilter4Filled;
