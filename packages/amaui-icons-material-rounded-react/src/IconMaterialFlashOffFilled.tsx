import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOffFilled'

      short_name='FlashOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.85 13-2-2h1.425q.575 0 .863.5.287.5.012 1Zm-2.6-2.6L7 4.15V3q0-.425.287-.713Q7.575 2 8 2h7.45q.55 0 .85.45.3.45.075.95Zm5.85 11.5-5.35-5.3-2.825 4.8q-.2.35-.562.237Q10 21.525 10 21.15V14H8q-.425 0-.713-.288Q7 13.425 7 13V9.85L2.1 4.9q-.275-.275-.288-.688Q1.8 3.8 2.1 3.5q.275-.275.7-.275.425 0 .7.275l17 17q.275.275.288.688.012.412-.288.712-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialFlashOffFilled.displayName = 'AmauiIconMaterialFlashOffFilled';

export default IconMaterialFlashOffFilled;
