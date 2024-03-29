import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubwayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubwayFilled'

      short_name='Subway'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V8.85q0-2.125 1.1-3.688Q4.2 3.6 6.2 2.8q1.35-.525 2.875-.663Q10.6 2 12 2t2.925.137q1.525.138 2.875.663 2 .8 3.1 2.362Q22 6.725 22 8.85V20q0 .825-.587 1.413Q20.825 22 20 22Zm3.5-9h9V9h-9Zm8 3.5q.425 0 .712-.288.288-.287.288-.712t-.288-.713q-.287-.287-.712-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-7 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q8.925 14.5 8.5 14.5t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm.325 3.5q.075 0 .5-.225L10.6 18.5h2.75l1.275 1.275q.075.075.525.225.125 0 .5-.2.275-.225.275-.55 0-.325-.225-.55l-.25-.25q1.1-.15 1.825-.988Q18 16.625 18 15.5V9q0-1.95-1.75-2.475Q14.5 6 12 6q-2.275 0-4.137.525Q6 7.05 6 9v6.5q0 1.125.725 1.962.725.838 1.825.988l-.275.275q-.225.225-.225.537 0 .313.25.538.1.1.525.2Z"/>
    </Icon>
  );
});

IconMaterialSubwayFilled.displayName = 'AmauiIconMaterialSubwayFilled';

export default IconMaterialSubwayFilled;
