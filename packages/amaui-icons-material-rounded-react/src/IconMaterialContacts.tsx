import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContacts = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Contacts'

      short_name='Contacts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 23q-.425 0-.713-.288Q4 22.425 4 22t.287-.712Q4.575 21 5 21h14q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 23 19 23ZM5 3q-.425 0-.713-.288Q4 2.425 4 2t.287-.713Q4.575 1 5 1h14q.425 0 .712.287Q20 1.575 20 2t-.288.712Q19.425 3 19 3Zm7 10q1.25 0 2.125-.875T15 10q0-1.25-.875-2.125T12 7q-1.25 0-2.125.875T9 10q0 1.25.875 2.125T12 13Zm-8 7q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm1.75-2q1.125-1.4 2.725-2.2 1.6-.8 3.525-.8 1.925 0 3.525.8 1.6.8 2.725 2.2H20V6H4v12Zm2.95 0h6.6q-.725-.5-1.562-.75Q12.9 17 12 17t-1.737.25q-.838.25-1.563.75Zm3.3-7q-.425 0-.712-.288Q11 10.425 11 10t.288-.713Q11.575 9 12 9t.713.287Q13 9.575 13 10t-.287.712Q12.425 11 12 11Zm0 1Z"/>
    </Icon>
  );
});

IconMaterialContacts.displayName = 'AmauiIconMaterialContacts';

export default IconMaterialContacts;
