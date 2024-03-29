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
      <path d="M2 22V8.85q0-2.125 1.1-3.688Q4.2 3.6 6.2 2.8q1.35-.525 2.875-.663Q10.6 2 12 2t2.925.137q1.525.138 2.875.663 2 .8 3.1 2.362Q22 6.725 22 8.85V22Zm5.5-2h1.6l1.5-1.5h2.75l1.5 1.5h1.65v-.5l-1.05-1.05q1.1-.15 1.825-.988Q18 16.625 18 15.5V9q0-1.95-1.75-2.475Q14.5 6 12 6q-2.275 0-4.137.525Q6 7.05 6 9v6.5q0 1.125.725 1.962.725.838 1.825.988L7.5 19.5Zm0-7V9h9v4Zm8 3.5q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713q.287-.287.712-.287t.712.287q.288.288.288.713t-.288.712q-.287.288-.712.288Zm-7 0q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713q.287-.287.712-.287t.713.287q.287.288.287.713t-.287.712q-.288.288-.713.288Z"/>
    </Icon>
  );
});

IconMaterialSubwayFilled.displayName = 'AmauiIconMaterialSubwayFilled';

export default IconMaterialSubwayFilled;
