import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInteractiveSpace = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InteractiveSpace'

      short_name='InteractiveSpace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m280-620 80-80-80-80-80 80 80 80Zm200-40ZM80-400v-520h800v520H671q6-20 8-40t0-40h121v-360H160v360h121q-2 20 0 40t8 40H80Zm580-280q25 0 42.5-17.5T720-740q0-25-17.5-42.5T660-800q-25 0-42.5 17.5T600-740q0 25 17.5 42.5T660-680ZM200-40v-84q0-35 19.5-65t51.5-45q49-23 102-34.5T480-280q54 0 107 11.5T689-234q32 15 51.5 45t19.5 65v84H200Zm80-80h400v-4q0-12-7-22t-18-15q-42-19-86-29t-89-10q-45 0-89 10t-86 29q-11 5-18 15t-7 22v4Zm200-200q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T540-460q0-25-17.5-42.5T480-520q-25 0-42.5 17.5T420-460q0 25 17.5 42.5T480-400Zm0-60Zm0 340Z"/>
    </Icon>
  );
});

IconMaterialInteractiveSpace.displayName = 'AmauiIconMaterialInteractiveSpace';

export default IconMaterialInteractiveSpace;
