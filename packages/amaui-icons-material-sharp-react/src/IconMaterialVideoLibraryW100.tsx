import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoLibraryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibraryW100'

      short_name='VideoLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.5 13.3 5.15-3.3-5.15-3.3Zm-4.85 3.4V3.3h13.4v13.4Zm.7-.7h12V4h-12Zm-3.4 3.4V6.8h.7v11.9h11.9v.7Zm3.4-3.4V4v12Z"/>
    </Icon>
  );
});

IconMaterialVideoLibraryW100.displayName = 'AmauiIconMaterialVideoLibraryW100';

export default IconMaterialVideoLibraryW100;
