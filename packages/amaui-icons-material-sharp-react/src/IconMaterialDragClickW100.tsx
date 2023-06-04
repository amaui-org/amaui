import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDragClickW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragClickW100'

      short_name='DragClick'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 764q-71 0-123-45.5T294 604l31 9q12.917 54 55.641 88.5T480 736q66 0 113-47t47-113q0-57-35-100t-88-56l-10-30q69 11 115 63t46 123q0 78.333-54.833 133.167Q558.333 764 480 764Zm.174 160Q408 924 344.442 896.595q-63.559-27.405-110.575-74.385-47.015-46.98-74.441-110.49Q132 648.21 132 576v-10q0-5 1-10l27 8v12q0 134 93 227t227 93q134 0 227-93t93-227q0-134-93-227t-227-93h-12l-9-27q5.25-1 10.5-1H480q72.21 0 135.72 27.391 63.51 27.392 110.49 74.348 46.98 46.957 74.385 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924ZM433 559 235 360l-33 100-70-232 232 70-100 33 199 198-30 30Z"/>
    </Icon>
  );
});

IconMaterialDragClickW100.displayName = 'AmauiIconMaterialDragClickW100';

export default IconMaterialDragClickW100;
