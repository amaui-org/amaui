import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLibraryBooksSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryBooksSharpW100'
      short_name='LibraryBooks'

      {...props}
    >
      <path d="M10 10.35H16.65V9.65H10ZM10 13.35H13.325V12.65H10ZM10 7.35H16.65V6.65H10ZM6.65 16.7V3.3H20.05V16.7ZM7.35 16H19.35V4H7.35ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4ZM7.35 16V4V16Z"/>
    </Icon>
  );
});

IconMaterialLibraryBooksSharpW100.displayName = 'AmauiIconMaterialLibraryBooksSharpW100';

export default IconMaterialLibraryBooksSharpW100;
