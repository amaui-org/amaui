import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLibraryBooksW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryBooksW100'

      short_name='LibraryBooks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 10.35h6.65v-.7H10Zm0 3h3.325v-.7H10Zm0-6h6.65v-.7H10ZM6.65 16.7V3.3h13.4v13.4Zm.7-.7h12V4h-12Zm-3.4 3.4V6.8h.7v11.9h11.9v.7Zm3.4-3.4V4v12Z"/>
    </Icon>
  );
});

IconMaterialLibraryBooksW100.displayName = 'AmauiIconMaterialLibraryBooksW100';

export default IconMaterialLibraryBooksW100;
