import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoSim = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSim'

      short_name='NoSim'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20 17.175-2-2V4h-7.15l-2 2L7.4 4.6l2.15-2.15q.2-.2.488-.325.287-.125.587-.125H18q.825 0 1.413.587Q20 3.175 20 4Zm-.2 5.425L6 8.8V20h12v-2.025l2 2V20q0 .825-.587 1.413Q18.825 22 18 22H6q-.825 0-1.412-.587Q4 20.825 4 20V8.625q0-.3.113-.575.112-.275.337-.5l.15-.15-3.2-3.2q-.275-.275-.275-.688 0-.412.3-.712.275-.275.7-.275.425 0 .7.275L21.2 21.175q.3.3.288.713-.013.412-.288.687-.3.3-.712.3-.413 0-.688-.275Zm-6.275-11.925Zm-1.875 3.8Z"/>
    </Icon>
  );
});

IconMaterialNoSim.displayName = 'AmauiIconMaterialNoSim';

export default IconMaterialNoSim;
