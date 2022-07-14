import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLibraryBooksSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryBooksSharpFilled'
      short_name='LibraryBooks'

      {...props}
    >
      <path d="M10 11H18V9H10ZM10 14H14V12H10ZM10 8H18V6H10ZM6 18V2H22V18ZM2 22V6H4V20H18V22Z"/>
    </Icon>
  );
});

export default IconMaterialLibraryBooksSharpFilled;
