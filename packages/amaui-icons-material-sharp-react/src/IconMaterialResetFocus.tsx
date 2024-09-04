import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetFocus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetFocus'

      short_name='ResetFocus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-320v-160h160v60H540v100h-60Zm0 240v-160h60v100h100v60H480Zm340-240v-100H720v-60h160v160h-60ZM720-80v-60h100v-100h60v160H720Zm111-480h-83q-26-88-99-144t-169-56q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-110h80v240H160v-80h94q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q129 0 226.5 79.5T831-560Z"/>
    </Icon>
  );
});

IconMaterialResetFocus.displayName = 'AmauiIconMaterialResetFocus';

export default IconMaterialResetFocus;
