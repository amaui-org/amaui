import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextSelectStartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSelectStartW100'

      short_name='TextSelectStart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 884v-28h80v28h-80Zm0-588v-28h80v28h-80Zm160 588v-28h80v28h-80Zm0-588v-28h80v28h-80Zm160 490v-80h28v80h-28Zm0-170v-80h28v80h-28Zm0-170v-80h28v80h-28ZM252 856V296h-66q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h160q5.95 0 9.975 4.035 4.025 4.035 4.025 10T355.975 292q-4.025 4-9.975 4h-66v560h66q5.95 0 9.975 4.035 4.025 4.035 4.025 10T355.975 880q-4.025 4-9.975 4H186q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h66Zm508-560v-28q11.55 0 19.775 8.225Q788 284.45 788 296h-28Zm0 588v-28h28q0 12-8.225 20T760 884Z"/>
    </Icon>
  );
});

IconMaterialTextSelectStartW100.displayName = 'AmauiIconMaterialTextSelectStartW100';

export default IconMaterialTextSelectStartW100;
