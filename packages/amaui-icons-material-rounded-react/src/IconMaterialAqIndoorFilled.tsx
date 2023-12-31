import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAqIndoorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AqIndoorFilled'

      short_name='AqIndoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m342-437 28-77h4l27 77h-59Zm235 55q-29 0-50-21.5T506-456q0-31 21-52.5t50-21.5q29 0 50 21.5t21 52.5q0 15-5 28.5T629-404l-15-22q-3-5-9-6.5t-11 2.5q-5 3-6 8.5t2 10.5l15 23q-7 3-13.5 4.5T577-382Zm-245-26h80l13 39q2 5 6 8t9 3q8 0 13.5-7t2.5-15l-63-165q-1-2-15-10h-13q-3 0-15 11l-62 165q-3 8 2 14.5t13 6.5q5 0 9-3t6-8l14-39Zm245 55q11 0 22.5-3t22.5-8l7 10q3 5 9 6.5t11-2.5q5-3 5.5-8.5T652-369l-6-10q17-15 25.5-35t8.5-42q0-43-30-73.5T577-560q-42 0-72 30.5T475-456q0 43 30 73t72 30ZM240-160q-33 0-56.5-23.5T160-240v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-160H240Z"/>
    </Icon>
  );
});

IconMaterialAqIndoorFilled.displayName = 'AmauiIconMaterialAqIndoorFilled';

export default IconMaterialAqIndoorFilled;
