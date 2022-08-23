import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSimCardDownloadSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownloadSharpW100'
      short_name='SimCardDownload'

      {...props}
    >
      <path d="M5.3 20.7V8.55L10.55 3.3H18.7V20.7ZM6 20H18V4H10.85L6 8.85ZM12 15.85 15.1 12.75 14.6 12.25 12.35 14.45V9.65H11.65V14.45L9.4 12.25L8.9 12.75ZM6 20H10.85H18Z"/>
    </Icon>
  );
});

IconMaterialSimCardDownloadSharpW100.displayName = 'AmauiIconMaterialSimCardDownloadSharpW100';

export default IconMaterialSimCardDownloadSharpW100;
