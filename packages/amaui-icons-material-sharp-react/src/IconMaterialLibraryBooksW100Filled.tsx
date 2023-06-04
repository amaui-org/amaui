import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLibraryBooksW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryBooksW100Filled'

      short_name='LibraryBooks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 10.35h6.65v-.7H10Zm0 3h3.325v-.7H10Zm0-6h6.65v-.7H10ZM6.65 16.7V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialLibraryBooksW100Filled.displayName = 'AmauiIconMaterialLibraryBooksW100Filled';

export default IconMaterialLibraryBooksW100Filled;
