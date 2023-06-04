import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSimCardDownload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownload'

      short_name='SimCardDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V8l6-6h10v20Zm2-2h12V4h-7.15L6 8.85Zm6-3 4-4-1.4-1.4-1.6 1.55V9h-2v4.15L9.4 11.6 8 13Zm-6 3h12Z"/>
    </Icon>
  );
});

IconMaterialSimCardDownload.displayName = 'AmauiIconMaterialSimCardDownload';

export default IconMaterialSimCardDownload;
