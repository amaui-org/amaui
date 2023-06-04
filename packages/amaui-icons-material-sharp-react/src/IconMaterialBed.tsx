import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bed'

      short_name='Bed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 19v-8.2h1V5h18v5.8h1V19h-2v-2H4v2Zm11-9h6V7h-6Zm-8 0h6V7H5Zm-1 5h16v-3H4Zm16 0H4Z"/>
    </Icon>
  );
});

IconMaterialBed.displayName = 'AmauiIconMaterialBed';

export default IconMaterialBed;
