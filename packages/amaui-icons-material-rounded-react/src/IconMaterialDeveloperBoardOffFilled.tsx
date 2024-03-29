import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperBoardOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardOffFilled'

      short_name='DeveloperBoardOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.825 17 16 13.175V12q0-.425-.287-.713Q15.425 11 15 11h-1.15l-1-1H15q.425 0 .713-.288Q16 9.425 16 9V8q0-.425-.287-.713Q15.425 7 15 7h-2q-.425 0-.712.287Q12 7.575 12 8v1.175l-1-1V8q0-.425-.287-.713Q10.425 7 10 7h-.175l-4-4H18q.825 0 1.413.587Q20 4.175 20 5v2h1q.425 0 .712.287Q22 7.575 22 8t-.288.712Q21.425 9 21 9h-1v2h1q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13h-1v2h1q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 17 21 17Zm-.05 5.575L18.175 21H4q-.825 0-1.412-.587Q2 19.825 2 19V4.825L1.375 4.2q-.3-.3-.288-.7.013-.4.313-.7.3-.3.713-.3.412 0 .712.3L21.2 21.175q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3ZM13 17h1.175L12 14.825V16q0 .425.288.712.287.288.712.288Zm-6 0h3q.425 0 .713-.288Q11 16.425 11 16v-2.1q0-.05-.025-.1l-.775-.775Q10.15 13 10.1 13H7q-.425 0-.713.287Q6 13.575 6 14v2q0 .425.287.712Q6.575 17 7 17Zm0-5h2.175L6 8.825V11q0 .425.287.712Q6.575 12 7 12Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardOffFilled.displayName = 'AmauiIconMaterialDeveloperBoardOffFilled';

export default IconMaterialDeveloperBoardOffFilled;
