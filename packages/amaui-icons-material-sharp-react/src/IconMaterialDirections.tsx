import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirections = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Directions'

      short_name='Directions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 15h2v-3h3.5v2.5L17 11l-3.5-3.5V10H8Zm4 7.8L1.2 12 12 1.2 22.8 12Zm0-2.8 8-8-8-8-8 8Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialDirections.displayName = 'AmauiIconMaterialDirections';

export default IconMaterialDirections;
