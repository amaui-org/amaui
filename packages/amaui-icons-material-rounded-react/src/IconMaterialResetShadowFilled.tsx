import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetShadowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetShadowFilled'

      short_name='ResetShadow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm0-80q-20-26-30.5-56T639-280q0-34 11-64t30-56q-50 0-85 35t-35 85q0 50 35 85t85 35ZM480-760q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-70q0-17 11.5-28.5T360-360q17 0 28.5 11.5T400-320v160q0 17-11.5 28.5T360-120H200q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200h54q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q65 0 139 38t195 187q11 13 3.5 28.5T792-563q-16 7-32 .5T739-585q-20-68-91.5-121.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialResetShadowFilled.displayName = 'AmauiIconMaterialResetShadowFilled';

export default IconMaterialResetShadowFilled;
