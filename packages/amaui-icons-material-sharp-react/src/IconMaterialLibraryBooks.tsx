import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLibraryBooks = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryBooks'

      short_name='LibraryBooks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 11h8V9h-8Zm0 3h4v-2h-4Zm0-6h8V6h-8ZM6 18V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2Zm6-6V4v12Z"/>
    </Icon>
  );
});

IconMaterialLibraryBooks.displayName = 'AmauiIconMaterialLibraryBooks';

export default IconMaterialLibraryBooks;
