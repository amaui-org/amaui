import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeStorageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeStorageFilled'

      short_name='HomeStorage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21 3 9h18l-2 12Zm4-6h6v-2H9ZM5 8V6h14v2Zm2-3V3h10v2Z"/>
    </Icon>
  );
});

IconMaterialHomeStorageFilled.displayName = 'AmauiIconMaterialHomeStorageFilled';

export default IconMaterialHomeStorageFilled;
