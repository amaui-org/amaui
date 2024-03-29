import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConnectWithoutContact = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectWithoutContact'

      short_name='ConnectWithoutContact'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 14q0-3.75 2.625-6.375T18 5v2q-2.925 0-4.962 2.037Q11 11.075 11 14Zm4 0q0-2.075 1.463-3.538Q15.925 9 18 9v2q-1.25 0-2.125.875T15 14ZM5 6q-.825 0-1.413-.588Q3 4.825 3 4t.587-1.413Q4.175 2 5 2q.825 0 1.412.587Q7 3.175 7 4q0 .825-.588 1.412Q5.825 6 5 6Zm-3 5V8.5q0-.625.438-1.062Q2.875 7 3.5 7h3q1.125 0 1.938-.713Q9.25 5.575 9.45 4.5h2q-.15 1.5-1.1 2.65Q9.4 8.3 8 8.75V11Zm17 6q-.825 0-1.413-.587Q17 15.825 17 15q0-.825.587-1.413Q18.175 13 19 13q.825 0 1.413.587Q21 14.175 21 15q0 .825-.587 1.413Q19.825 17 19 17Zm-3 5v-2.25q-1.4-.45-2.35-1.6-.95-1.15-1.1-2.65h2q.2 1.075 1.012 1.788.813.712 1.938.712h3q.625 0 1.062.438.438.437.438 1.062V22Z"/>
    </Icon>
  );
});

IconMaterialConnectWithoutContact.displayName = 'AmauiIconMaterialConnectWithoutContact';

export default IconMaterialConnectWithoutContact;
