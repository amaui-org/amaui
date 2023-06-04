import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEject = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Eject'

      short_name='Eject'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8.6L9.07 13h5.86z" opacity=".3"/><path d="M5 17h14v2H5zm7-12L5.33 15h13.34L12 5zm0 3.6l2.93 4.4H9.07L12 8.6z"/>
    </Icon>
  );
});

IconMaterialEject.displayName = 'AmauiIconMaterialEject';

export default IconMaterialEject;
