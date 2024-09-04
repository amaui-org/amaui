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
      <path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm0-80q-20-26-30.5-56T639-280q0-34 11-64t30-56q-50 0-85 35t-35 85q0 50 35 85t85 35Zm151-400h-83q-26-88-99-144t-169-56q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-110h80v240H160v-80h94q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q129 0 226.5 79.5T831-560Z"/>
    </Icon>
  );
});

IconMaterialResetShadowFilled.displayName = 'AmauiIconMaterialResetShadowFilled';

export default IconMaterialResetShadowFilled;
