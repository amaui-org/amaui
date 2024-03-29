import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3gMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3gMobiledataFilled'

      short_name='3gMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17q-.425 0-.712-.288Q3 16.425 3 16t.288-.713Q3.575 15 4 15h4v-2H4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h4V9H4q-.425 0-.712-.288Q3 8.425 3 8t.288-.713Q3.575 7 4 7h4q.825 0 1.413.587Q10 8.175 10 9v1.5q0 .65-.425 1.075Q9.15 12 8.5 12q.65 0 1.075.425Q10 12.85 10 13.5V15q0 .825-.587 1.413Q8.825 17 8 17Zm10 0q-.825 0-1.412-.587Q12 15.825 12 15V9q0-.825.588-1.413Q13.175 7 14 7h6q.425 0 .712.287Q21 7.575 21 8t-.288.712Q20.425 9 20 9h-6v6h5v-2h-1.5q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q17.075 11 17.5 11H20q.425 0 .712.287.288.288.288.713v3q0 .825-.587 1.413Q19.825 17 19 17Z"/>
    </Icon>
  );
});

IconMaterial3gMobiledataFilled.displayName = 'AmauiIconMaterial3gMobiledataFilled';

export default IconMaterial3gMobiledataFilled;
