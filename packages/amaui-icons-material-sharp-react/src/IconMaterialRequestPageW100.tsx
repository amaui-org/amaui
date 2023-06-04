import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRequestPageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPageW100'

      short_name='RequestPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 17.35h.7v-1h2v-3.7h-4v-2.3h4v-.7h-2v-1h-.7v1h-2v3.7h4v2.3h-4v.7h2ZM5.3 20.7V3.3h8.15l5.25 5.25V20.7ZM6 20h12V8.85L13.15 4H6ZM6 4v16Z"/>
    </Icon>
  );
});

IconMaterialRequestPageW100.displayName = 'AmauiIconMaterialRequestPageW100';

export default IconMaterialRequestPageW100;
