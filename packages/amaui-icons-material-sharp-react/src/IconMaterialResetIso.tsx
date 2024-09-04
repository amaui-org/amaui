import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetIso = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetIso'

      short_name='ResetIso'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360v-120h120L480-360Zm0 161v-85l196-196h85L480-199Zm0 77 358-358h42v43L522-80h-42v-42Zm119 42 281-281v85L684-80h-85Zm161 0 120-120v120H760Zm71-480h-83q-26-88-99-144t-169-56q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-110h80v240H160v-80h94q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q129 0 226.5 79.5T831-560Z"/>
    </Icon>
  );
});

IconMaterialResetIso.displayName = 'AmauiIconMaterialResetIso';

export default IconMaterialResetIso;
