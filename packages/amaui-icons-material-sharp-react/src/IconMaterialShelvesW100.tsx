import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShelvesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelvesW100'

      short_name='Shelves'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 21.825V2.2H5v2.125h14V2.2h.7v19.625H19V19.7H5v2.125ZM5 11h2.8V7.3h4.4V11H19V5.025H5Zm0 8h6.8v-3.7h4.4V19H19v-7.3H5Zm3.5-8h3V8h-3Zm4 8h3v-3h-3Zm-4-8h3Zm4 8h3Z"/>
    </Icon>
  );
});

IconMaterialShelvesW100.displayName = 'AmauiIconMaterialShelvesW100';

export default IconMaterialShelvesW100;
