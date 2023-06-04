import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSelectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelectW100'

      short_name='Select'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 884q-11.55 0-19.775-8.225Q172 867.55 172 856h28v28Zm-28-108v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160v-80h28v80h-28Zm0-160q0-11.55 8.225-19.775Q188.45 268 200 268v28h-28Zm108 588v-28h80v28h-80Zm0-588v-28h80v28h-80Zm160 588v-28h80v28h-80Zm0-588v-28h80v28h-80Zm160 588v-28h80v28h-80Zm0-588v-28h80v28h-80Zm160 588v-28h28q0 12-8.225 20T760 884Zm0-98v-80h28v80h-28Zm0-170v-80h28v80h-28Zm0-170v-80h28v80h-28Zm0-150v-28q11.55 0 19.775 8.225Q788 284.45 788 296h-28Z"/>
    </Icon>
  );
});

IconMaterialSelectW100.displayName = 'AmauiIconMaterialSelectW100';

export default IconMaterialSelectW100;
