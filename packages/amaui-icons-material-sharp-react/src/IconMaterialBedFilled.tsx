import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedFilled'

      short_name='Bed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 19v-8.2h1V5h18v5.8h1V19h-2v-2H4v2Zm11-9h6V7h-6Zm-8 0h6V7H5Z"/>
    </Icon>
  );
});

IconMaterialBedFilled.displayName = 'AmauiIconMaterialBedFilled';

export default IconMaterialBedFilled;
