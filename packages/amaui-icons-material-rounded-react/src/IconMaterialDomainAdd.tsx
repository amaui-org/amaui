import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDomainAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DomainAdd'

      short_name='DomainAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.825 0-1.412-.587Q2 19.825 2 19V5q0-.825.588-1.413Q3.175 3 4 3h6q.825 0 1.413.587Q12 4.175 12 5v2h8q.825 0 1.413.587Q22 8.175 22 9v6h-2V9h-8v2h2v2h-2v2h2v2h-2v2h4v2Zm0-2h2v-2H4Zm0-4h2v-2H4Zm0-4h2V9H4Zm0-4h2V5H4Zm4 12h2v-2H8Zm0-4h2v-2H8Zm0-4h2V9H8Zm0-4h2V5H8Zm13 16q-.425 0-.712-.288Q20 22.425 20 22v-1h-1q-.425 0-.712-.288Q18 20.425 18 20t.288-.712Q18.575 19 19 19h1v-1q0-.425.288-.712Q20.575 17 21 17t.712.288Q22 17.575 22 18v1h1q.425 0 .712.288.288.287.288.712t-.288.712Q23.425 21 23 21h-1v1q0 .425-.288.712Q21.425 23 21 23Zm-5-10v-2h2v2Zm0 4v-2h2v2Z"/>
    </Icon>
  );
});

IconMaterialDomainAdd.displayName = 'AmauiIconMaterialDomainAdd';

export default IconMaterialDomainAdd;
