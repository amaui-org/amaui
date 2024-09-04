import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetShutterSpeedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetShutterSpeedFilled'

      short_name='ResetShutterSpeed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q0-45 18.5-83t49.5-66l86 149H480Zm100 172q-37-21-62-55t-34-77h173l-77 132Zm77-212-77-132q23-13 48-20.5t52-7.5q17 0 32.5 3t30.5 8l-86 149Zm23 240q-17 0-32.5-3T617-91l86-149 77 132q-23 13-48 20.5T680-80Zm23-240 77-132q37 21 62 55t34 77H703Zm109 189-86-149h154q0 45-18 83t-50 66Zm19-429h-83q-26-88-99-144t-169-56q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-110h80v240H160v-80h94q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q129 0 226.5 79.5T831-560Z"/>
    </Icon>
  );
});

IconMaterialResetShutterSpeedFilled.displayName = 'AmauiIconMaterialResetShutterSpeedFilled';

export default IconMaterialResetShutterSpeedFilled;
