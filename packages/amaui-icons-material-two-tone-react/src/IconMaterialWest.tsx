import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWest = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='West'

      short_name='West'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/>
    </Icon>
  );
});

IconMaterialWest.displayName = 'AmauiIconMaterialWest';

export default IconMaterialWest;
