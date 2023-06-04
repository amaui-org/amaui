import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveRoadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveRoadFilled'

      short_name='RemoveRoad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 13V4h2v9ZM4 20V4h2v16Zm7-12V4h2v4Zm0 6v-4h2v4Zm0 6v-4h2v4Zm4.425.575 2.125-2.125-2.125-2.1 1.425-1.425 2.125 2.125 2.125-2.125 1.4 1.425-2.125 2.125 2.1 2.125L21.1 22l-2.15-2.125L16.825 22Z"/>
    </Icon>
  );
});

IconMaterialRemoveRoadFilled.displayName = 'AmauiIconMaterialRemoveRoadFilled';

export default IconMaterialRemoveRoadFilled;
