import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileDownloadSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadSharpW100Filled'
      short_name='FileDownload'

      {...props}
    >
      <path d="M12 15 8.9 11.9 9.4 11.4 11.65 13.65V4.85H12.35V13.65L14.6 11.4L15.1 11.9ZM5.3 18.7V15H6V18H18V15H18.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadSharpW100Filled.displayName = 'AmauiIconMaterialFileDownloadSharpW100Filled';

export default IconMaterialFileDownloadSharpW100Filled;
