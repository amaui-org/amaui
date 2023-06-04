import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLibraryAddCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAddCheckFilled'

      short_name='LibraryAddCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.7 14.05 5.65-5.65-1.4-1.45-4.25 4.25-2.15-2.1-1.4 1.4ZM6 18V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialLibraryAddCheckFilled.displayName = 'AmauiIconMaterialLibraryAddCheckFilled';

export default IconMaterialLibraryAddCheckFilled;
