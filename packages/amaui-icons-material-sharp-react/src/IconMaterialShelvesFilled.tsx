import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShelvesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelvesFilled'

      short_name='Shelves'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 23V1h2v2h14V1h2v22h-2v-2H5v2Zm2-12h2V7h6v4h6V5H5Zm0 8h6v-4h6v4h2v-6H5Z"/>
    </Icon>
  );
});

IconMaterialShelvesFilled.displayName = 'AmauiIconMaterialShelvesFilled';

export default IconMaterialShelvesFilled;
