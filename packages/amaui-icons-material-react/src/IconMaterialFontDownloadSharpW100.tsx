import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFontDownloadSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadSharpW100'
      short_name='FontDownload'

      {...props}
    >
      <path d="M7.75 17.45H8.5L9.55 14.45H14.45L15.5 17.45H16.25L12.25 6.25H11.75ZM9.8 13.75 11.95 7.7H12.05L14.2 13.75ZM3.3 20.7V3.3H20.7V20.7ZM4 20H20V4H4ZM4 20V4V20Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadSharpW100.displayName = 'AmauiIconMaterialFontDownloadSharpW100';

export default IconMaterialFontDownloadSharpW100;
