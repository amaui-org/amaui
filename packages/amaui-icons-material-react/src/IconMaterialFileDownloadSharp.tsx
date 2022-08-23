import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileDownloadSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadSharp'
      short_name='FileDownload'

      {...props}
    >
      <path d="M12 16 7 11 8.4 9.55 11 12.15V4H13V12.15L15.6 9.55L17 11ZM4 20V15H6V18H18V15H20V20Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadSharp.displayName = 'AmauiIconMaterialFileDownloadSharp';

export default IconMaterialFileDownloadSharp;
