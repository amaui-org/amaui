import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabs = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Labs'

      short_name='Labs'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.537-1.462Q7 19.075 7 17V8H5V2h14v6h-2v9q0 2.075-1.462 3.538Q14.075 22 12 22ZM7 6h10V4H7Zm5 14q.975 0 1.75-.562.775-.563 1.075-1.438H12v-2h3v-1h-3v-2h3v-1h-3v-2h3V8H9v9q0 1.25.875 2.125T12 20ZM7 6V4v2Z"/>
    </Icon>
  );
});

IconMaterialLabs.displayName = 'AmauiIconMaterialLabs';

export default IconMaterialLabs;
