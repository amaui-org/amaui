import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSosFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SosFilled'

      short_name='Sos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 17q-.825 0-1.412-.587Q8.5 15.825 8.5 15V9q0-.825.588-1.413Q9.675 7 10.5 7h3q.825 0 1.413.587.587.588.587 1.413v6q0 .825-.587 1.413Q14.325 17 13.5 17ZM5 17H2q-.425 0-.712-.288Q1 16.425 1 16t.288-.713Q1.575 15 2 15h3v-2H3q-.825 0-1.412-.588Q1 11.825 1 11V9q0-.825.588-1.413Q2.175 7 3 7h3q.425 0 .713.287Q7 7.575 7 8t-.287.712Q6.425 9 6 9H3v2h2q.825 0 1.412.587Q7 12.175 7 13v2q0 .825-.588 1.413Q5.825 17 5 17Zm16 0h-3q-.425 0-.712-.288Q17 16.425 17 16t.288-.713Q17.575 15 18 15h3v-2h-2q-.825 0-1.413-.588Q17 11.825 17 11V9q0-.825.587-1.413Q18.175 7 19 7h3q.425 0 .712.287Q23 7.575 23 8t-.288.712Q22.425 9 22 9h-3v2h2q.825 0 1.413.587Q23 12.175 23 13v2q0 .825-.587 1.413Q21.825 17 21 17Zm-10.5-2h3V9h-3v6Z"/>
    </Icon>
  );
});

IconMaterialSosFilled.displayName = 'AmauiIconMaterialSosFilled';

export default IconMaterialSosFilled;
