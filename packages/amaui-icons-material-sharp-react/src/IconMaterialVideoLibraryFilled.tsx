import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoLibraryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibraryFilled'

      short_name='VideoLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.5 14.5 7-4.5-7-4.5ZM6 18V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialVideoLibraryFilled.displayName = 'AmauiIconMaterialVideoLibraryFilled';

export default IconMaterialVideoLibraryFilled;
