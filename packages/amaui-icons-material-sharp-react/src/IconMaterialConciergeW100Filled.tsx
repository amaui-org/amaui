import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConciergeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConciergeW100Filled'

      short_name='Concierge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M94-496h108v-292H94v292Zm136 0h100l286-105v-59H508l-114 40-12-28 124-40h304v-58l-268-84-312 92v242Zm222 364h416v-28H452v28Zm40-88h336q0-66-44.5-114T674-387v-28h-28v28q-65 5-109.5 53T492-220Z"/>
    </Icon>
  );
});

IconMaterialConciergeW100Filled.displayName = 'AmauiIconMaterialConciergeW100Filled';

export default IconMaterialConciergeW100Filled;
