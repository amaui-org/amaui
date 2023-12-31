import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldPersonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldPersonFilled'

      short_name='ShieldPerson'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-440q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0 360q-146-37-233-160t-87-276v-244l320-120 320 120v244q0 153-87 276T480-80Zm0-84q59-19 104.5-59.5T664-315q-43-22-89.5-33.5T480-360q-48 0-94.5 11.5T296-315q34 51 79.5 91.5T480-164Z"/>
    </Icon>
  );
});

IconMaterialShieldPersonFilled.displayName = 'AmauiIconMaterialShieldPersonFilled';

export default IconMaterialShieldPersonFilled;
