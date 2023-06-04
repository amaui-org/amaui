import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBroadcastOnHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BroadcastOnHomeW100'

      short_name='BroadcastOnHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.7 7.375q-.175-.1-.337-.188Q20.2 7.1 20 7.025V4H4v-.7h16.7ZM3.3 16.7V7.8h4.9v8.9Zm13.35 2.9v-4.825q-.225-.1-.362-.313-.138-.212-.138-.462 0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .25-.125.45t-.375.325V19.6Zm-1.975-2.875q-.575-.55-.925-1.25-.35-.7-.35-1.475 0-1.5 1.05-2.55Q15.5 10.4 17 10.4q1.5 0 2.55 1.05Q20.6 12.5 20.6 14q0 .8-.337 1.512-.338.713-.938 1.238l-.5-.5q.5-.425.788-1.012.287-.588.287-1.238 0-1.225-.838-2.062Q18.225 11.1 17 11.1q-1.2 0-2.05.838-.85.837-.85 2.062 0 .65.3 1.225.3.575.775 1Zm-1.75 1.775q-.975-.875-1.5-2.05Q10.9 15.275 10.9 14q0-2.55 1.788-4.325Q14.475 7.9 17 7.9q2.55 0 4.325 1.775Q23.1 11.45 23.1 14q0 1.275-.512 2.462-.513 1.188-1.513 2.013l-.45-.475q.875-.75 1.325-1.8.45-1.05.45-2.2 0-2.275-1.562-3.838Q19.275 8.6 17 8.6q-2.25 0-3.825 1.562Q11.6 11.725 11.6 14q0 1.15.462 2.2.463 1.05 1.338 1.825ZM4 16h3.5V8.5H4Zm0 0h3.5H4Z"/>
    </Icon>
  );
});

IconMaterialBroadcastOnHomeW100.displayName = 'AmauiIconMaterialBroadcastOnHomeW100';

export default IconMaterialBroadcastOnHomeW100;
