import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoLibraryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibraryW100Filled'

      short_name='VideoLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.5 13.3 5.15-3.3-5.15-3.3Zm-4.85 3.4V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7Z"/>
    </Icon>
  );
});

IconMaterialVideoLibraryW100Filled.displayName = 'AmauiIconMaterialVideoLibraryW100Filled';

export default IconMaterialVideoLibraryW100Filled;
