import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArchive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Archive'

      short_name='Archive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V5.8L5.3 3h13.4L21 5.8V21ZM5.4 6h13.2l-.85-1H6.25ZM5 19h14V8H5Zm7-1 4-4-1.4-1.4-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14Zm-7 1V8v11Z"/>
    </Icon>
  );
});

IconMaterialArchive.displayName = 'AmauiIconMaterialArchive';

export default IconMaterialArchive;
