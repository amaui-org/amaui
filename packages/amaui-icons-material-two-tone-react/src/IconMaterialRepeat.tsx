import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRepeat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Repeat'

      short_name='Repeat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 22v-3h12v-6h-2v4H7v-3l-4 4zM21 6l-4-4v3H5v6h2V7h10v3z"/>
    </Icon>
  );
});

IconMaterialRepeat.displayName = 'AmauiIconMaterialRepeat';

export default IconMaterialRepeat;
