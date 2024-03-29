import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatItalic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalic'

      short_name='FormatItalic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 20q-.625 0-1.062-.438Q5 19.125 5 18.5t.438-1.062Q5.875 17 6.5 17h1.875l4-10H10.5q-.625 0-1.062-.438Q9 6.125 9 5.5t.438-1.062Q9.875 4 10.5 4h7q.625 0 1.062.438Q19 4.875 19 5.5t-.438 1.062Q18.125 7 17.5 7h-1.875l-4 10H13.5q.625 0 1.062.438.438.437.438 1.062t-.438 1.062Q14.125 20 13.5 20Z"/>
    </Icon>
  );
});

IconMaterialFormatItalic.displayName = 'AmauiIconMaterialFormatItalic';

export default IconMaterialFormatItalic;
