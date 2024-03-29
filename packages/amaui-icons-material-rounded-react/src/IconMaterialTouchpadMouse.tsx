import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTouchpadMouse = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchpadMouse'

      short_name='TouchpadMouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-160q58 0 99-41t41-99v-60H520v60q0 58 41 99t99 41ZM521-440h99v-114q-38 11-65.5 42T521-440Zm179 0h99q-6-41-33.5-72T700-554v114ZM660-80q-92 0-156-64t-64-156v-120q0-92 64-156t156-64q92 0 156 64t64 156v120q0 92-64 156T660-80ZM160-240v-480 480Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v96q-17-19-37-34.5T800-686v-34H160v480h206q5 21 11.5 41t16.5 39H160Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouse.displayName = 'AmauiIconMaterialTouchpadMouse';

export default IconMaterialTouchpadMouse;
