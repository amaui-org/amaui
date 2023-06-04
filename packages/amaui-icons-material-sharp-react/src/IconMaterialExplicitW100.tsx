import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExplicitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitW100'

      short_name='Explicit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 16.35h4.7v-.7h-4v-3.3h4v-.7h-4v-3.3h4v-.7h-4.7ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialExplicitW100.displayName = 'AmauiIconMaterialExplicitW100';

export default IconMaterialExplicitW100;
