import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllInbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInbox'

      short_name='AllInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 15q-1.05 0-1.975-.538Q11.1 13.925 10.55 13H8v3h12v-3h-2.55q-.525.925-1.45 1.462-.925.538-2 .538Zm0-2q.825 0 1.3-.475.475-.475.6-.9.075-.25.338-.437Q16.5 11 16.85 11H20V4H8v7h3.15q.35 0 .612.2.263.2.338.425.125.425.6.9.475.475 1.3.475Zm0 3h6H8h6Zm-6 2q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm-4 4q-.825 0-1.412-.587Q2 20.825 2 20V7q0-.425.288-.713Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialAllInbox.displayName = 'AmauiIconMaterialAllInbox';

export default IconMaterialAllInbox;
