import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicExternalOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOffW100Filled'

      short_name='MicExternalOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.45 6.8 6.6 3.95q.2-.05.338-.05h.212q.975 0 1.662.687.688.688.688 1.663v.237q0 .113-.05.313Zm9.05 9.05-.7-.7V7q0-1.025-.687-1.713Q16.425 4.6 15.4 4.6q-1.025 0-1.712.687Q13 5.975 13 7v3.35l-.7-.7V7q0-1.275.913-2.188.912-.912 2.187-.912t2.187.912Q18.5 5.725 18.5 7Zm1.3 5.1-6.8-6.8V17q0 1.275-.912 2.188-.913.912-2.188.912-1.275 0-2.187-.912Q6.8 18.275 6.8 17h-.35q-.15 0-.25-.1t-.125-.25l-.75-7.125q-.05-.35.175-.587.225-.238.575-.238H7.55L2.7 3.85q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l17.1 17.1q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125ZM9.9 19.4q1.025 0 1.713-.688.687-.687.687-1.712v-3.55l-3.4-3.4-.675 6.6q-.025.15-.125.25t-.25.1H7.5q0 1.025.688 1.712.687.688 1.712.688Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOffW100Filled.displayName = 'AmauiIconMaterialMicExternalOffW100Filled';

export default IconMaterialMicExternalOffW100Filled;
