import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperBoardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardFilled'

      short_name='DeveloperBoard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.825 0-1.412-.587Q2 19.825 2 19V5q0-.825.588-1.413Q3.175 3 4 3h14q.825 0 1.413.587Q20 4.175 20 5v2h1q.425 0 .712.287Q22 7.575 22 8t-.288.712Q21.425 9 21 9h-1v2h1q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13h-1v2h1q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 17 21 17h-1v2q0 .825-.587 1.413Q18.825 21 18 21Zm3-4h3q.425 0 .713-.288Q11 16.425 11 16v-2q0-.425-.287-.713Q10.425 13 10 13H7q-.425 0-.713.287Q6 13.575 6 14v2q0 .425.287.712Q6.575 17 7 17Zm6-7h2q.425 0 .713-.288Q16 9.425 16 9V8q0-.425-.287-.713Q15.425 7 15 7h-2q-.425 0-.712.287Q12 7.575 12 8v1q0 .425.288.712.287.288.712.288Zm-6 2h3q.425 0 .713-.288Q11 11.425 11 11V8q0-.425-.287-.713Q10.425 7 10 7H7q-.425 0-.713.287Q6 7.575 6 8v3q0 .425.287.712Q6.575 12 7 12Zm6 5h2q.425 0 .713-.288Q16 16.425 16 16v-4q0-.425-.287-.713Q15.425 11 15 11h-2q-.425 0-.712.287Q12 11.575 12 12v4q0 .425.288.712.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardFilled.displayName = 'AmauiIconMaterialDeveloperBoardFilled';

export default IconMaterialDeveloperBoardFilled;
