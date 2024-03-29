import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddCard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCard'

      short_name='AddCard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v6H4v6h9q.425 0 .713.288.287.287.287.712t-.287.712Q13.425 20 13 20ZM4 8h16V6H4Zm16 14q-.425 0-.712-.288Q19 21.425 19 21v-2h-2q-.425 0-.712-.288Q16 18.425 16 18t.288-.712Q16.575 17 17 17h2v-2q0-.425.288-.713Q19.575 14 20 14t.712.287Q21 14.575 21 15v2h2q.425 0 .712.288.288.287.288.712t-.288.712Q23.425 19 23 19h-2v2q0 .425-.288.712Q20.425 22 20 22ZM4 18V6v12Z"/>
    </Icon>
  );
});

IconMaterialAddCard.displayName = 'AmauiIconMaterialAddCard';

export default IconMaterialAddCard;
