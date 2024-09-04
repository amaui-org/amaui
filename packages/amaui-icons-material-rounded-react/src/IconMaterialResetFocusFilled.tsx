import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetFocusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetFocusFilled'

      short_name='ResetFocus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M540-420v70q0 13-8.5 21.5T510-320q-13 0-21.5-8.5T480-350v-90q0-17 11.5-28.5T520-480h90q13 0 21.5 8.5T640-450q0 13-8.5 21.5T610-420h-70Zm0 280h70q13 0 21.5 8.5T640-110q0 13-8.5 21.5T610-80h-90q-17 0-28.5-11.5T480-120v-90q0-13 8.5-21.5T510-240q13 0 21.5 8.5T540-210v70Zm280-280h-70q-13 0-21.5-8.5T720-450q0-13 8.5-21.5T750-480h90q17 0 28.5 11.5T880-440v90q0 13-8.5 21.5T850-320q-13 0-21.5-8.5T820-350v-70Zm0 280v-70q0-13 8.5-21.5T850-240q13 0 21.5 8.5T880-210v90q0 17-11.5 28.5T840-80h-90q-13 0-21.5-8.5T720-110q0-13 8.5-21.5T750-140h70ZM480-760q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-70q0-17 11.5-28.5T360-360q17 0 28.5 11.5T400-320v160q0 17-11.5 28.5T360-120H200q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200h54q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q65 0 139 38t195 187q11 13 3.5 28.5T792-563q-16 7-32 .5T739-585q-20-68-91.5-121.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialResetFocusFilled.displayName = 'AmauiIconMaterialResetFocusFilled';

export default IconMaterialResetFocusFilled;
