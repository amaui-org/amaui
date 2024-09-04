import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetBrightnessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetBrightnessFilled'

      short_name='ResetBrightness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-60-60-60H520v-100l-60-60 60-60v-100h100l60-60 60 60h100v100l60 60-60 60v100H740l-60 60Zm0-100q50 0 85-35t35-85q0-50-35-85t-85-35v240Zm151-400h-83q-26-88-99-144t-169-56q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-110h80v240H160v-80h94q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q129 0 226.5 79.5T831-560Z"/>
    </Icon>
  );
});

IconMaterialResetBrightnessFilled.displayName = 'AmauiIconMaterialResetBrightnessFilled';

export default IconMaterialResetBrightnessFilled;
