import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFertileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FertileW100Filled'

      short_name='Fertile'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480.174 924Q408 924 344.442 896.595q-63.559-27.405-110.575-74.385-47.015-46.98-74.441-110.49Q132 648.21 132 576V300l202 152q35-54 72-103.5t74-93.5q33 39 70 88.5T625 452l203-152v276q0 72.21-27.391 135.72-27.392 63.51-74.348 110.49-46.957 46.98-110.435 74.385Q552.348 924 480.174 924Z"/>
    </Icon>
  );
});

IconMaterialFertileW100Filled.displayName = 'AmauiIconMaterialFertileW100Filled';

export default IconMaterialFertileW100Filled;
