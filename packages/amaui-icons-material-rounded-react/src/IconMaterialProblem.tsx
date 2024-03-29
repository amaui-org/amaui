import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProblem = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Problem'

      short_name='Problem'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 16q.425 0 .713-.288Q8 15.425 8 15t-.287-.713Q7.425 14 7 14t-.713.287Q6 14.575 6 15t.287.712Q6.575 16 7 16Zm0-3q.425 0 .713-.288Q8 12.425 8 12V9q0-.425-.287-.713Q7.425 8 7 8t-.713.287Q6 8.575 6 9v3q0 .425.287.712Q6.575 13 7 13Zm4 2h6q.425 0 .712-.288Q18 14.425 18 14t-.288-.713Q17.425 13 17 13h-6q-.425 0-.712.287Q10 13.575 10 14t.288.712Q10.575 15 11 15Zm0-4h6q.425 0 .712-.288Q18 10.425 18 10t-.288-.713Q17.425 9 17 9h-6q-.425 0-.712.287Q10 9.575 10 10t.288.712Q10.575 11 11 11Zm-7 9q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16V6H4v12Zm0 0V6v12Z"/>
    </Icon>
  );
});

IconMaterialProblem.displayName = 'AmauiIconMaterialProblem';

export default IconMaterialProblem;
