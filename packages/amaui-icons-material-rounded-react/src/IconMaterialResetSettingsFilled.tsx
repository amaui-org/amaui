import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetSettingsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetSettingsFilled'

      short_name='ResetSettings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M550-390h100q13 0 21.5 8.5T680-360q0 13-8.5 21.5T650-330H550q-13 0-21.5-8.5T520-360q0-13 8.5-21.5T550-390Zm30 240v-20h-30q-13 0-21.5-8.5T520-200q0-13 8.5-21.5T550-230h30v-20q0-13 8.5-21.5T610-280q13 0 21.5 8.5T640-250v100q0 13-8.5 21.5T610-120q-13 0-21.5-8.5T580-150Zm130-80h100q13 0 21.5 8.5T840-200q0 13-8.5 21.5T810-170H710q-13 0-21.5-8.5T680-200q0-13 8.5-21.5T710-230Zm10-80v-100q0-13 8.5-21.5T750-440q13 0 21.5 8.5T780-410v20h30q13 0 21.5 8.5T840-360q0 13-8.5 21.5T810-330h-30v20q0 13-8.5 21.5T750-280q-13 0-21.5-8.5T720-310ZM480-760q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-70q0-17 11.5-28.5T360-360q17 0 28.5 11.5T400-320v160q0 17-11.5 28.5T360-120H200q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200h54q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q65 0 139 38t195 187q11 13 3.5 28.5T792-563q-16 7-32 .5T739-585q-20-68-91.5-121.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialResetSettingsFilled.displayName = 'AmauiIconMaterialResetSettingsFilled';

export default IconMaterialResetSettingsFilled;
