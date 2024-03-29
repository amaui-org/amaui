import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH3Filled'

      short_name='FormatH3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17q-.425 0-.712-.288Q3 16.425 3 16V8q0-.425.288-.713Q3.575 7 4 7t.713.287Q5 7.575 5 8v3h4V8q0-.425.288-.713Q9.575 7 10 7t.713.287Q11 7.575 11 8v8q0 .425-.287.712Q10.425 17 10 17t-.712-.288Q9 16.425 9 16v-3H5v3q0 .425-.287.712Q4.425 17 4 17Zm10 0q-.425 0-.712-.288Q13 16.425 13 16t.288-.713Q13.575 15 14 15h5v-2h-3q-.425 0-.712-.288Q15 12.425 15 12t.288-.713Q15.575 11 16 11h3V9h-5q-.425 0-.712-.288Q13 8.425 13 8t.288-.713Q13.575 7 14 7h5q.825 0 1.413.587Q21 8.175 21 9v6q0 .825-.587 1.413Q19.825 17 19 17Z"/>
    </Icon>
  );
});

IconMaterialFormatH3Filled.displayName = 'AmauiIconMaterialFormatH3Filled';

export default IconMaterialFormatH3Filled;
