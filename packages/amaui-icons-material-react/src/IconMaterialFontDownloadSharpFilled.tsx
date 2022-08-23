import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFontDownloadSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadSharpFilled'
      short_name='FontDownload'

      {...props}
    >
      <path d="M6.4 18H8.5L9.6 14.95H14.4L15.5 18H17.6L13.05 6H10.95ZM10.2 13.2 11.95 8.25H12.05L13.8 13.2ZM2 22V2H22V22Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadSharpFilled.displayName = 'AmauiIconMaterialFontDownloadSharpFilled';

export default IconMaterialFontDownloadSharpFilled;
