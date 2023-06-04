import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrunchDiningW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrunchDiningW100'

      short_name='BrunchDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.4 21v-.7h14v.7Zm0-3.2v-.7h5v-.9h4v.9h5v.7Zm17 3.2v-6.25q-.65-.525-1.125-1.387-.475-.863-.475-1.913V3.6h3.8v7.85q0 1.05-.425 1.913-.425.862-1.075 1.387v5.55h1.5v.7Zm-.9-12.2h2.4V4.3h-2.4Zm1.25 5.25q.45-.3.8-1.038.35-.737.35-1.562V9.5h-2.4v1.95q0 .825.4 1.562.4.738.85 1.038Zm-.05 0Z"/>
    </Icon>
  );
});

IconMaterialBrunchDiningW100.displayName = 'AmauiIconMaterialBrunchDiningW100';

export default IconMaterialBrunchDiningW100;
