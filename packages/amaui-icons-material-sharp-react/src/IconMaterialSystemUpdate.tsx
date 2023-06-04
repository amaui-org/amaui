import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSystemUpdate = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdate'

      short_name='SystemUpdate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 16-4-4 1.4-1.4 1.6 1.55V8h2v4.15l1.6-1.55L16 12Zm-7 7V1h14v22Zm2-5h10V6H7Zm0 3h10v-1H7ZM7 4h10V3H7Zm0 0V3v1Zm0 17v-1 1Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdate.displayName = 'AmauiIconMaterialSystemUpdate';

export default IconMaterialSystemUpdate;
