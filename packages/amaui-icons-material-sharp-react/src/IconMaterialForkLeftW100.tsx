import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForkLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkLeftW100'

      short_name='ForkLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.65 20.35V16.9q-.525-1.9-1.862-2.838-1.338-.937-2.888-.937-.65 0-1.338.063-.687.062-1.287.162l2.25 2.25-.5.5-3.1-3.1 3.1-3.1.5.5-2.25 2.25q.6-.1 1.25-.15.65-.05 1.375-.05 1.525 0 2.738.675 1.212.675 2.012 2.025V5.275l-2.25 2.25-.5-.5 3.1-3.1 3.1 3.1-.5.5-2.25-2.25V20.35Z"/>
    </Icon>
  );
});

IconMaterialForkLeftW100.displayName = 'AmauiIconMaterialForkLeftW100';

export default IconMaterialForkLeftW100;
