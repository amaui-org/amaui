import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH2Filled'

      short_name='FormatH2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17q-.425 0-.712-.288Q3 16.425 3 16V8q0-.425.288-.713Q3.575 7 4 7t.713.287Q5 7.575 5 8v3h4V8q0-.425.288-.713Q9.575 7 10 7t.713.287Q11 7.575 11 8v8q0 .425-.287.712Q10.425 17 10 17t-.712-.288Q9 16.425 9 16v-3H5v3q0 .425-.287.712Q4.425 17 4 17Zm10 0q-.425 0-.712-.288Q13 16.425 13 16v-3q0-.825.588-1.413Q14.175 11 15 11h4V9h-5q-.425 0-.712-.288Q13 8.425 13 8t.288-.713Q13.575 7 14 7h5q.825 0 1.413.587Q21 8.175 21 9v2q0 .825-.587 1.412Q19.825 13 19 13h-4v2h5q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 17 20 17Z"/>
    </Icon>
  );
});

IconMaterialFormatH2Filled.displayName = 'AmauiIconMaterialFormatH2Filled';

export default IconMaterialFormatH2Filled;
