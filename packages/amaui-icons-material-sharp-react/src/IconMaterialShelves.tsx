import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShelves = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Shelves'

      short_name='Shelves'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 23V1h2v2h14V1h2v22h-2v-2H5v2Zm2-12h2V7h6v4h6V5H5Zm0 8h6v-4h6v4h2v-6H5Zm4-8h2V9H9Zm4 8h2v-2h-2Zm-4-8h2Zm4 8h2Z"/>
    </Icon>
  );
});

IconMaterialShelves.displayName = 'AmauiIconMaterialShelves';

export default IconMaterialShelves;
