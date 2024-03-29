import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConveyorBelt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConveyorBelt'

      short_name='ConveyorBelt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-1.25 0-2.125-.875T2 18q0-1.25.875-2.125T5 15h14q1.25 0 2.125.875T22 18q0 1.25-.875 2.125T19 21Zm0-2h14q.425 0 .712-.288Q20 18.425 20 18t-.288-.712Q19.425 17 19 17H5q-.425 0-.713.288Q4 17.575 4 18t.287.712Q4.575 19 5 19Zm5-6q-.425 0-.712-.288Q9 12.425 9 12V4q0-.425.288-.713Q9.575 3 10 3h8q.425 0 .712.287Q19 3.575 19 4v8q0 .425-.288.712Q18.425 13 18 13Zm1-2h6V5h-6Zm-8.05-.05q-.4 0-.675-.288Q2 10.375 2 9.975q0-.4.288-.675.287-.275.687-.275h3q.4 0 .675.275t.275.675q0 .4-.275.687-.275.288-.675.288ZM13 8h2.025q.425 0 .7-.287Q16 7.425 16 7t-.275-.7q-.275-.275-.7-.275h-2.05q-.425 0-.7.275Q12 6.575 12 7q0 .425.288.713Q12.575 8 13 8ZM4.975 8q-.425 0-.7-.287Q4 7.425 4 7t.287-.7q.288-.275.713-.275h.95q.425 0 .7.275.275.275.275.7 0 .425-.275.713Q6.375 8 5.95 8ZM11 11V5v6Z"/>
    </Icon>
  );
});

IconMaterialConveyorBelt.displayName = 'AmauiIconMaterialConveyorBelt';

export default IconMaterialConveyorBelt;
