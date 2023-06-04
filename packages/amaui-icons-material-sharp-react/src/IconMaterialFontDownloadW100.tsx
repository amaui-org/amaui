import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFontDownloadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadW100'

      short_name='FontDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.75 17.45h.75l1.05-3h4.9l1.05 3h.75l-4-11.2h-.5Zm2.05-3.7 2.15-6.05h.1l2.15 6.05ZM3.3 20.7V3.3h17.4v17.4ZM4 20h16V4H4Zm0 0V4v16Z"/>
    </Icon>
  );
});

IconMaterialFontDownloadW100.displayName = 'AmauiIconMaterialFontDownloadW100';

export default IconMaterialFontDownloadW100;
