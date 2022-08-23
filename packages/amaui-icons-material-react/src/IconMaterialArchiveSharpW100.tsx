import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArchiveSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchiveSharpW100'
      short_name='Archive'

      {...props}
    >
      <path d="M4.3 19.7V7.475L5.925 5.6H18.1L19.7 7.55V19.7ZM5.4 7.3H18.6L17.75 6.3H6.25ZM5 19H19V8H5ZM12 16.95 15.1 13.85 14.6 13.35 12.35 15.6V10.75H11.65V15.6L9.4 13.35L8.9 13.85ZM5 19V8V19Z"/>
    </Icon>
  );
});

IconMaterialArchiveSharpW100.displayName = 'AmauiIconMaterialArchiveSharpW100';

export default IconMaterialArchiveSharpW100;
