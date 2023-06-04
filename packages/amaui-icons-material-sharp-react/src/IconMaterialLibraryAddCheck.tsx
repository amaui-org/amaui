import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLibraryAddCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAddCheck'

      short_name='LibraryAddCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.7 14.05 5.65-5.65-1.4-1.45-4.25 4.25-2.15-2.1-1.4 1.4ZM6 18V2h16v16Zm2-2h12V4H8Zm-6 6V6h2v14h14v2Zm6-6V4v12Z"/>
    </Icon>
  );
});

IconMaterialLibraryAddCheck.displayName = 'AmauiIconMaterialLibraryAddCheck';

export default IconMaterialLibraryAddCheck;
