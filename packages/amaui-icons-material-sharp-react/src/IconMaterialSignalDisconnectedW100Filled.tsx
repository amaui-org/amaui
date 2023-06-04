import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalDisconnectedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalDisconnectedW100Filled'

      short_name='SignalDisconnected'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.425 13.6-.5-.5q.5-.675.787-1.488Q17 10.8 17 10q0-.9-.4-1.9-.4-1-1.05-1.65l.5-.5q.775.8 1.212 1.9.438 1.1.438 2.175 0 .925-.325 1.887-.325.963-.95 1.688Zm-2.85-2.85L11.25 8.425q.125-.05.312-.113.188-.062.438-.062.725 0 1.238.512.512.513.512 1.238 0 .25-.05.438-.05.187-.125.312Zm5.175 5.175-.5-.5q1.025-1.175 1.538-2.588.512-1.412.512-2.837 0-1.575-.625-3.113Q19.05 5.35 17.85 4.15l.5-.5q1.325 1.325 1.987 2.937Q21 8.2 21 10q0 1.625-.562 3.162-.563 1.538-1.688 2.763Zm1.1 4.925-7.5-7.5v6.5h-.7v-7.2L7.3 8.3q-.125.375-.212.837Q7 9.6 7 10q0 .9.338 1.85.337.95 1.112 1.7l-.5.5q-.75-.775-1.2-1.862Q6.3 11.1 6.3 10q0-.575.138-1.188.137-.612.337-1.037L4.85 5.85q-.575.95-.862 2.062Q3.7 9.025 3.7 10q0 1.575.625 3.113.625 1.537 1.825 2.737l-.5.5q-1.375-1.375-2.012-3Q3 11.725 3 10q0-1.2.3-2.388.3-1.187 1.025-2.287L3.15 4.15l.5-.5 16.7 16.7Z"/>
    </Icon>
  );
});

IconMaterialSignalDisconnectedW100Filled.displayName = 'AmauiIconMaterialSignalDisconnectedW100Filled';

export default IconMaterialSignalDisconnectedW100Filled;
