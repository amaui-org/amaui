import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInteractiveSpaceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InteractiveSpaceFilled'

      short_name='InteractiveSpace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-620 80-80-80-80-80 80 80 80Zm380-60q25 0 42.5-17.5T720-740q0-25-17.5-42.5T660-800q-25 0-42.5 17.5T600-740q0 25 17.5 42.5T660-680ZM200-40v-84q0-35 19.5-65t51.5-45q49-23 102-34.5T480-280q54 0 107 11.5T689-234q32 15 51.5 45t19.5 65v84H200Zm280-280q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm-191-80H80v-520h800v520H671q6-20 8-40t0-40q-8-76-64.5-128T480-660q-78 0-134.5 52T281-480q-2 20 0 40t8 40Z"/>
    </Icon>
  );
});

IconMaterialInteractiveSpaceFilled.displayName = 'AmauiIconMaterialInteractiveSpaceFilled';

export default IconMaterialInteractiveSpaceFilled;
