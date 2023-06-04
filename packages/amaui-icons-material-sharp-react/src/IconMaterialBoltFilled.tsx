import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltFilled'

      short_name='Bolt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 21 1-7H6.725L13 3h1l-1 7h4.275L11 21Z"/>
    </Icon>
  );
});

IconMaterialBoltFilled.displayName = 'AmauiIconMaterialBoltFilled';

export default IconMaterialBoltFilled;
