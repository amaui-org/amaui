import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAspectRatio = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatio'

      short_name='AspectRatio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 12q.425 0 .713-.288Q7 11.425 7 11V9h2.025q.425 0 .7-.288Q10 8.425 10 8t-.287-.713Q9.425 7 9 7H6q-.425 0-.713.287Q5 7.575 5 8v3.025q0 .425.287.7Q5.575 12 6 12Zm9 5h3q.425 0 .712-.288Q19 16.425 19 16v-3.025q0-.425-.288-.7Q18.425 12 18 12t-.712.287Q17 12.575 17 13v2h-2.025q-.425 0-.7.287Q14 15.575 14 16t.288.712Q14.575 17 15 17ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2V6v12Zm0 0h16V6H4v12Z"/>
    </Icon>
  );
});

IconMaterialAspectRatio.displayName = 'AmauiIconMaterialAspectRatio';

export default IconMaterialAspectRatio;
