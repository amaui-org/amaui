import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHighDensityW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HighDensityW100Filled'

      short_name='HighDensity'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 884v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160 0v-28h80v28h-80Zm160-98v-80h28v80h-28Zm0-170v-80h28v80h-28Zm0-170v-80h28v80h-28ZM232 776q-24.75 0-42.375-17.625T172 716V328q0-24.75 17.625-42.375T232 268h388q24.75 0 42.375 17.625T680 328v388q0 24.75-17.625 42.375T620 776H232Zm528-480v-28q11.55 0 19.775 8.225Q788 284.45 788 296h-28Zm0 588v-28h28q0 12-8.225 20T760 884Zm-560 0q-11.55 0-19.775-8.225Q172 867.55 172 856h28v28Z"/>
    </Icon>
  );
});

IconMaterialHighDensityW100Filled.displayName = 'AmauiIconMaterialHighDensityW100Filled';

export default IconMaterialHighDensityW100Filled;
