import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsPowerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPowerW100Filled'

      short_name='SettingsPower'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 12V4.15h.7V12Zm.35 5.7q-2.8 0-4.75-1.95Q5.3 13.8 5.3 11q0-1.725.813-3.2.812-1.475 2.237-2.45l.5.5q-1.3.875-2.075 2.225Q6 9.425 6 11q0 2.5 1.75 4.25T12 17q2.5 0 4.25-1.75T18 11q0-1.575-.75-2.95-.75-1.375-2.1-2.2l.5-.5q1.375 1.025 2.213 2.487Q18.7 9.3 18.7 11q0 2.8-1.95 4.75Q14.8 17.7 12 17.7Zm-4 6q-.275 0-.487-.213Q7.3 23.275 7.3 23t.213-.487Q7.725 22.3 8 22.3t.488.213q.212.212.212.487t-.212.487Q8.275 23.7 8 23.7Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm4 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Z"/>
    </Icon>
  );
});

IconMaterialSettingsPowerW100Filled.displayName = 'AmauiIconMaterialSettingsPowerW100Filled';

export default IconMaterialSettingsPowerW100Filled;
