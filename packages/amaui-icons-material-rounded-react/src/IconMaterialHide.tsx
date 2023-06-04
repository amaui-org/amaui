import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHide = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hide'

      short_name='Hide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.425 21 3 19.575 7.6 15H5v-2h6v6H9v-2.6ZM13 11V5h2v2.6L19.575 3 21 4.425 16.4 9H19v2Z"/>
    </Icon>
  );
});

IconMaterialHide.displayName = 'AmauiIconMaterialHide';

export default IconMaterialHide;
