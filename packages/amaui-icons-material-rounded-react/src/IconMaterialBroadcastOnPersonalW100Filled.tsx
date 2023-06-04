import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBroadcastOnPersonalW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BroadcastOnPersonalW100Filled'

      short_name='BroadcastOnPersonal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V8.65L10 3.625 15.325 7.6q-2.6.575-4.25 2.65T9.425 15q0 .975.25 1.913.25.937.725 1.787Zm9.625.8q-.975-.875-1.5-2.05Q10.9 16.275 10.9 15q0-2.55 1.788-4.325Q14.475 8.9 17 8.9q2.55 0 4.325 1.775Q23.1 12.45 23.1 15q0 1.275-.512 2.462-.513 1.188-1.513 2.013l-.45-.475q.875-.75 1.325-1.8.45-1.05.45-2.2 0-2.275-1.562-3.838Q19.275 9.6 17 9.6q-2.25 0-3.825 1.562Q11.6 12.725 11.6 15q0 1.15.462 2.2.463 1.05 1.338 1.825Zm1.75-1.775q-.575-.55-.925-1.25-.35-.7-.35-1.475 0-1.5 1.05-2.55Q15.5 11.4 17 11.4q1.5 0 2.55 1.05Q20.6 13.5 20.6 15q0 .8-.337 1.512-.338.713-.938 1.238l-.5-.5q.5-.425.788-1.012.287-.588.287-1.238 0-1.225-.838-2.062Q18.225 12.1 17 12.1q-1.2 0-2.05.838-.85.837-.85 2.062 0 .65.3 1.225.3.575.775 1ZM16.65 20.6v-4.825q-.225-.1-.362-.313-.138-.212-.138-.462 0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .25-.125.45t-.375.325V20.6Z"/>
    </Icon>
  );
});

IconMaterialBroadcastOnPersonalW100Filled.displayName = 'AmauiIconMaterialBroadcastOnPersonalW100Filled';

export default IconMaterialBroadcastOnPersonalW100Filled;
