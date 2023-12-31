import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSearchHandsFreeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchHandsFreeW100'

      short_name='SearchHandsFree'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.174-132Q408-132 344.442-159.391q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828-552.348 828-480.174q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348-132 480.174-132ZM466-162v-170q-51-11-87-47t-47-87H162q6 124 93 210t211 94Zm28 0q124-8 211-94t93-210H628q-11 51-47 87t-87 47v170ZM162-494h170l71.852-75.444Q412-578 424-583t24-5h64q12 0 24 5t20.148 13.556L628-494h170q-6-129-98-217.5T480-800q-128 0-220 88.5T162-494Z"/>
    </Icon>
  );
});

IconMaterialSearchHandsFreeW100.displayName = 'AmauiIconMaterialSearchHandsFreeW100';

export default IconMaterialSearchHandsFreeW100;
