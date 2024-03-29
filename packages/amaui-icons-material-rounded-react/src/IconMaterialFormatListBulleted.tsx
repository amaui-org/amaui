import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatListBulleted = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatListBulleted'

      short_name='FormatListBulleted'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.5 13.5q-.625 0-1.062-.438Q3 12.625 3 12t.438-1.062Q3.875 10.5 4.5 10.5t1.062.438Q6 11.375 6 12t-.438 1.062q-.437.438-1.062.438Zm0-6q-.625 0-1.062-.438Q3 6.625 3 6t.438-1.062Q3.875 4.5 4.5 4.5t1.062.438Q6 5.375 6 6t-.438 1.062Q5.125 7.5 4.5 7.5Zm0 12q-.625 0-1.062-.438Q3 18.625 3 18t.438-1.062Q3.875 16.5 4.5 16.5t1.062.438Q6 17.375 6 18t-.438 1.062q-.437.438-1.062.438ZM9 19q-.425 0-.712-.288Q8 18.425 8 18t.288-.712Q8.575 17 9 17h11q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 19 20 19Zm0-6q-.425 0-.712-.288Q8 12.425 8 12t.288-.713Q8.575 11 9 11h11q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Zm0-6q-.425 0-.712-.287Q8 6.425 8 6t.288-.713Q8.575 5 9 5h11q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7Z"/>
    </Icon>
  );
});

IconMaterialFormatListBulleted.displayName = 'AmauiIconMaterialFormatListBulleted';

export default IconMaterialFormatListBulleted;
