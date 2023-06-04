import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDragClickW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DragClickW100Filled'

      short_name='DragClick'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 764q-71 0-123-45.5T294 604l31 9q13 54 55.5 88.5T480 736q66 0 113-47t47-113q0-57-35-100t-88-56l-10-30q69 11 115 63t46 123q0 78-55 133t-133 55Zm0 160q-72 0-135.5-27.5T234 822q-47-47-74.5-110.5T132 576v-10q0-5 1-10l27 8v12q0 134 93 227t227 93q134 0 227-93t93-227q0-134-93-227t-227-93h-12l-9-27q5-1 10.5-1H480q72 0 135.5 27.5T726 330q47 47 74.5 110.5T828 576q0 72-27.5 135.5T726 822q-47 47-110.5 74.5T480 924ZM235 360l-18 55q-4 11-15 11t-14-11l-48-160q-2-8 4.5-14.5T159 236l160 48q11 3 11 14t-11 15l-55 18 184 183q6 6 6 15t-6 15q-6 6-15 6t-15-6L235 360Z"/>
    </Icon>
  );
});

IconMaterialDragClickW100Filled.displayName = 'AmauiIconMaterialDragClickW100Filled';

export default IconMaterialDragClickW100Filled;
