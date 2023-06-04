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
      <path d="M5 19v-2h14v2Zm.35-4L12 5l6.65 10ZM12 13Zm-2.95 0h5.9L12 8.6Z"/>
    </Icon>
  );
});

IconMaterialEject.displayName = 'AmauiIconMaterialEject';

export default IconMaterialEject;
