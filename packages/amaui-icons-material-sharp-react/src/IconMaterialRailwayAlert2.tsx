import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRailwayAlert2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RailwayAlert2'

      short_name='RailwayAlert2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-520Zm0-280ZM80-80l80-80h480l80 80H80Zm120-120 40-40h-20q-58 0-99-41t-41-99v-260q0-129 92.5-204.5T400-920q29 0 56.5 3.5T510-905q-19 14-35 31t-29 37q-11-2-22.5-2.5T400-840q-43 0-81.5 10T249-800h177q-9 19-15 39t-9 41H177q-8 18-12.5 37.5T160-640v40h252q7 22 16.5 42t22.5 38H160v140q0 25 17.5 42.5T220-320h360q25 0 42.5-17.5T640-380v-23q20 3 40 3t40-3v23q0 58-41 99t-99 41h-20l40 40H200Zm200-160q25 0 42.5-17.5T460-420q0-25-17.5-42.5T400-480q-25 0-42.5 17.5T340-420q0 25 17.5 42.5T400-360Zm280-120q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm-20-160h40v-160h-40v160Zm20 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialRailwayAlert2.displayName = 'AmauiIconMaterialRailwayAlert2';

export default IconMaterialRailwayAlert2;
