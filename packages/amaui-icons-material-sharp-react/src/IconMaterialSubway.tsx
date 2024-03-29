import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubway = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Subway'

      short_name='Subway'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V8.85q0-2.125 1.1-3.688Q4.2 3.6 6.2 2.8q1.35-.525 2.875-.663Q10.6 2 12 2t2.925.137q1.525.138 2.875.663 2 .8 3.1 2.362Q22 6.725 22 8.85V22Zm7.1-2h5.75l-1.5-1.5H10.6Zm-1.6-7h9V9h-9Zm8 3.5q.425 0 .712-.288.288-.287.288-.712t-.288-.713q-.287-.287-.712-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-7 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q8.925 14.5 8.5 14.5t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM4 20h3.5v-.5l1.05-1.05q-1.1-.15-1.825-.988Q6 16.625 6 15.5V9q0-1.95 1.863-2.475Q9.725 6 12 6q2.5 0 4.25.525T18 9v6.5q0 1.125-.725 1.962-.725.838-1.825.988l1.05 1.05v.5H20V8.85q0-1.5-.737-2.563-.738-1.062-2.213-1.637-1.1-.425-2.437-.538Q13.275 4 12 4t-2.612.112q-1.338.113-2.438.538-1.475.575-2.212 1.637Q4 7.35 4 8.85Zm0 0h16H4Z"/>
    </Icon>
  );
});

IconMaterialSubway.displayName = 'AmauiIconMaterialSubway';

export default IconMaterialSubway;
