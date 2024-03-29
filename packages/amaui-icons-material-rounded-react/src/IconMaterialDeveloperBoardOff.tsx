import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperBoardOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperBoardOff'

      short_name='DeveloperBoardOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.575 18.175 21H4q-.825 0-1.412-.587Q2 19.825 2 19V4.825L1.375 4.2q-.3-.3-.288-.7.013-.4.313-.7.3-.3.713-.3.412 0 .712.3L21.2 21.175q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3ZM22 16q0 .425-.288.712Q21.425 17 21 17h-1.175L18 15.175V5H7.825l-2-2H18q.825 0 1.413.587Q20 4.175 20 5v2h1q.425 0 .712.287Q22 7.575 22 8t-.288.712Q21.425 9 21 9h-1v2h1q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13h-1v2h1q.425 0 .712.287.288.288.288.713ZM11 8.175 9.825 7H10q.425 0 .713.287Q11 7.575 11 8ZM12.825 10l-.412-.413L12 9.175V8q0-.425.288-.713Q12.575 7 13 7h2q.425 0 .713.287Q16 7.575 16 8v1q0 .425-.287.712Q15.425 10 15 10ZM16 13.15 13.85 11H15q.425 0 .713.287.287.288.287.713Zm-3.075-3.05Zm-2.85 2.8ZM7 17q-.425 0-.713-.288Q6 16.425 6 16v-2q0-.425.287-.713Q6.575 13 7 13h3q.425 0 .713.287.287.288.287.713v2q0 .425-.287.712Q10.425 17 10 17Zm-3 2h12.175l-2-2H13q-.425 0-.712-.288Q12 16.425 12 16v-1.175L9.175 12H7q-.425 0-.713-.288Q6 11.425 6 11V8.825l-2-2V19Z"/>
    </Icon>
  );
});

IconMaterialDeveloperBoardOff.displayName = 'AmauiIconMaterialDeveloperBoardOff';

export default IconMaterialDeveloperBoardOff;
