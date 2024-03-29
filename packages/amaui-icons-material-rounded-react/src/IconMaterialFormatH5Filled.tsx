import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH5Filled'

      short_name='FormatH5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17q-.425 0-.712-.288Q3 16.425 3 16V8q0-.425.288-.713Q3.575 7 4 7t.713.287Q5 7.575 5 8v3h4V8q0-.425.288-.713Q9.575 7 10 7t.713.287Q11 7.575 11 8v8q0 .425-.287.712Q10.425 17 10 17t-.712-.288Q9 16.425 9 16v-3H5v3q0 .425-.287.712Q4.425 17 4 17Zm10 0q-.425 0-.712-.288Q13 16.425 13 16t.288-.713Q13.575 15 14 15h5v-2h-5q-.425 0-.712-.288Q13 12.425 13 12V8q0-.425.288-.713Q13.575 7 14 7h6q.425 0 .712.287Q21 7.575 21 8t-.288.712Q20.425 9 20 9h-5v2h4q.825 0 1.413.587Q21 12.175 21 13v2q0 .825-.587 1.413Q19.825 17 19 17Z"/>
    </Icon>
  );
});

IconMaterialFormatH5Filled.displayName = 'AmauiIconMaterialFormatH5Filled';

export default IconMaterialFormatH5Filled;
