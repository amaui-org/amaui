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
      <path d="M4.5 19.5q-.625 0-1.062-.438Q3 18.625 3 18t.438-1.062Q3.875 16.5 4.5 16.5t1.062.438Q6 17.375 6 18t-.438 1.062q-.437.438-1.062.438ZM8 19v-2h13v2Zm-3.5-5.5q-.625 0-1.062-.438Q3 12.625 3 12t.438-1.062Q3.875 10.5 4.5 10.5t1.062.438Q6 11.375 6 12t-.438 1.062q-.437.438-1.062.438ZM8 13v-2h13v2ZM4.5 7.5q-.625 0-1.062-.438Q3 6.625 3 6t.438-1.062Q3.875 4.5 4.5 4.5t1.062.438Q6 5.375 6 6t-.438 1.062Q5.125 7.5 4.5 7.5ZM8 7V5h13v2Z"/>
    </Icon>
  );
});

IconMaterialFormatListBulleted.displayName = 'AmauiIconMaterialFormatListBulleted';

export default IconMaterialFormatListBulleted;
