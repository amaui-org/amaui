import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGenresW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GenresW100Filled'

      short_name='Genres'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M403.765-256Q447-256 477.5-286.333 508-316.667 508-360v-288h112v-56H480v272q-16-14-35.565-23-19.565-9-40.435-9-43.333 0-73.667 30.265Q300-403.471 300-360.235 300-317 330.265-286.5q30.264 30.5 73.5 30.5Zm76.409 124Q408-132 344.442-159.391q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828-552.348 828-480.174q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348-132 480.174-132Z"/>
    </Icon>
  );
});

IconMaterialGenresW100Filled.displayName = 'AmauiIconMaterialGenresW100Filled';

export default IconMaterialGenresW100Filled;
