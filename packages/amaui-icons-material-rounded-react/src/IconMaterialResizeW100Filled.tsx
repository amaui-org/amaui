import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResizeW100Filled'

      short_name='Resize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 616v-80h28v80h-28Zm0-160v-80h28v80h-28Zm108-160v-28h80v28h-80Zm160 588v-28h80v28h-80Zm0-588v-28h80v28h-80Zm160 588v-28h80v28h-80Zm160-98v-80h28v80h-28Zm0-170v-80h28v80h-28Zm13.965-170Q768 446 764 441.975T760 432V328q0-14-9-23t-23-9H614q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h114q24.75 0 42.375 17.625T788 328v104q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM232 884q-24.75 0-42.375-17.625T172 824V710q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v114q0 14 9 23t23 9h114q5.95 0 9.975 4.035 4.025 4.035 4.025 10T355.975 880q-4.025 4-9.975 4H232Zm528 0v-28h28q0 12-8.225 20T760 884ZM172 296q0-11.55 8.225-19.775Q188.45 268 200 268v28h-28Z"/>
    </Icon>
  );
});

IconMaterialResizeW100Filled.displayName = 'AmauiIconMaterialResizeW100Filled';

export default IconMaterialResizeW100Filled;
