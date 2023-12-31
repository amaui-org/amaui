import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlobeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlobeW100Filled'

      short_name='Globe'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.174-132Q408-132 344.442-159.391q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828-552.348 828-480.174q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348-132 480.174-132ZM480-160q134 0 227-93t93-227v-14q0-7-1-14-2 26-19.5 43T736-448H628q-26.4 0-45.2-18.76-18.8-18.759-18.8-45.103v-31.931H436v-63.863Q436-634 454.8-653q18.8-19 45.2-19h32v-40q0-31 21-47.5t50-16.5q-29-12-59.587-18-30.588-6-63.413-6-134 0-227 93t-93 227v15q0 7 1 15h173q54 0 91 37t37 90.547V-290h-96v109q26 10 55 15.5t59 5.5Z"/>
    </Icon>
  );
});

IconMaterialGlobeW100Filled.displayName = 'AmauiIconMaterialGlobeW100Filled';

export default IconMaterialGlobeW100Filled;
