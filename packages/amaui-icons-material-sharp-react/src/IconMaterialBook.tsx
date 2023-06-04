import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book'

      short_name='Book'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h16v20Zm2-2h12V4h-2v7l-2.5-1.5L11 11V4H6Zm5-16h5ZM6 4h12H6Z"/>
    </Icon>
  );
});

IconMaterialBook.displayName = 'AmauiIconMaterialBook';

export default IconMaterialBook;
