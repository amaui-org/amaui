import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStraightenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenFilled'

      short_name='Straighten'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 18V6h5v6h2V6h2v6h2V6h2v6h2V6h5v12Z"/>
    </Icon>
  );
});

IconMaterialStraightenFilled.displayName = 'AmauiIconMaterialStraightenFilled';

export default IconMaterialStraightenFilled;
