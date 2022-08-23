import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSimCardDownloadSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownloadSharp'
      short_name='SimCardDownload'

      {...props}
    >
      <path d="M4 22V8L10 2H20V22ZM6 20H18V4H10.85L6 8.85ZM12 17 16 13 14.6 11.6 13 13.15V9H11V13.15L9.4 11.6L8 13ZM6 20H10.85H18Z"/>
    </Icon>
  );
});

IconMaterialSimCardDownloadSharp.displayName = 'AmauiIconMaterialSimCardDownloadSharp';

export default IconMaterialSimCardDownloadSharp;
