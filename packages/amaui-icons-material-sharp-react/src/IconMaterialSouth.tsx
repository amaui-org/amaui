import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSouth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='South'

      short_name='South'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 22-7-7 1.4-1.425 4.6 4.6V2h2v16.175l4.6-4.575L19 15Z"/>
    </Icon>
  );
});

IconMaterialSouth.displayName = 'AmauiIconMaterialSouth';

export default IconMaterialSouth;
