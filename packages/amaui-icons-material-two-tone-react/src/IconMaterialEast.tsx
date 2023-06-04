import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEast = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='East'

      short_name='East'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z"/>
    </Icon>
  );
});

IconMaterialEast.displayName = 'AmauiIconMaterialEast';

export default IconMaterialEast;
