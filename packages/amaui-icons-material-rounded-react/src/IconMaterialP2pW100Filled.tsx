import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialP2pW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='P2pW100Filled'

      short_name='P2p'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-24.75 0-42.375-17.625T132-272v-496q0-24.75 17.625-42.375T192-828h178q24.75 0 42.375 17.625T430-768v160h-28v-81H160v338h270v79q0 24.75-17.625 42.375T370-212H192Zm389 80q-21.037 0-36.019-14.981Q530-161.962 530-183v-168h28v80h242v-337H530v-80q0-24.75 17.625-42.375T590-748h178q24.75 0 42.375 17.625T828-688v496q0 24.75-17.625 42.375T768-132H581ZM328.035-454Q317-454 309.5-461.465t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5Zm152 0Q469-454 461.5-461.465t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5Zm151 0Q620-454 612.5-461.465t-7.5-18.5q0-11.035 7.465-18.535t18.5-7.5q11.035 0 18.535 7.465t7.5 18.5q0 11.035-7.465 18.535t-18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialP2pW100Filled.displayName = 'AmauiIconMaterialP2pW100Filled';

export default IconMaterialP2pW100Filled;
