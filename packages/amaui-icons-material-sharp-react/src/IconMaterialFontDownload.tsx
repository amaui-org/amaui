import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFontDownload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownload'

      short_name='FontDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 18h2.1l1.1-3.05h4.8L15.5 18h2.1L13.05 6h-2.1Zm3.8-4.8 1.75-4.95h.1l1.75 4.95ZM2 22V2h20v20Zm2-2h16V4H4Zm0 0V4v16Z"/>
    </Icon>
  );
});

IconMaterialFontDownload.displayName = 'AmauiIconMaterialFontDownload';

export default IconMaterialFontDownload;
