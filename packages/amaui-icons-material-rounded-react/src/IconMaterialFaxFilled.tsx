import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFaxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaxFilled'

      short_name='Fax'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20V6q0-.825.588-1.412Q9.175 4 10 4h6q.825 0 1.413.588Q18 5.175 18 6v3h1q1.25 0 2.125.875T22 12v6q0 .825-.587 1.413Q20.825 20 20 20Zm-3.5 1q1.05 0 1.775-.725Q7 19.55 7 18.5v-8q0-1.05-.725-1.775Q5.55 8 4.5 8q-1.05 0-1.775.725Q2 9.45 2 10.5v8q0 1.05.725 1.775Q3.45 21 4.5 21ZM10 9h6V6h-6Zm6 5q.425 0 .712-.288Q17 13.425 17 13t-.288-.713Q16.425 12 16 12t-.712.287Q15 12.575 15 13t.288.712Q15.575 14 16 14Zm3 0q.425 0 .712-.288Q20 13.425 20 13t-.288-.713Q19.425 12 19 12t-.712.287Q18 12.575 18 13t.288.712Q18.575 14 19 14Zm-3 3q.425 0 .712-.288Q17 16.425 17 16t-.288-.713Q16.425 15 16 15t-.712.287Q15 15.575 15 16t.288.712Q15.575 17 16 17Zm3 0q.425 0 .712-.288Q20 16.425 20 16t-.288-.713Q19.425 15 19 15t-.712.287Q18 15.575 18 16t.288.712Q18.575 17 19 17Zm-9 0h4v-5h-4Z"/>
    </Icon>
  );
});

IconMaterialFaxFilled.displayName = 'AmauiIconMaterialFaxFilled';

export default IconMaterialFaxFilled;
