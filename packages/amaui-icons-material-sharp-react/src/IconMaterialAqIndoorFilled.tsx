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
      <path d="m342-437 28-77h4l27 77h-59Zm235 55q-29 0-50-21.5T506-456q0-31 21-52.5t50-21.5q29 0 50 21.5t21 52.5q0 15-5 28.5T629-404l-23-34-23 16 22 34q-7 3-13.5 4.5T577-382Zm-297 24h34l18-50h80l17 50h35l-75-197h-35l-74 197Zm357 16 23-16-14-21q17-15 25.5-35t8.5-42q0-43-30-73.5T577-560q-42 0-72 30.5T475-456q0 43 30 73t72 30q11 0 22.5-3t22.5-8l15 22ZM160-160v-480l320-240 320 240v480H160Z"/>
    </Icon>
  );
});

IconMaterialAqIndoorFilled.displayName = 'AmauiIconMaterialAqIndoorFilled';

export default IconMaterialAqIndoorFilled;
