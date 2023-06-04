import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDepartureBoardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DepartureBoardW100Filled'

      short_name='DepartureBoard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.9 8.4q.1.1.238.112.137.013.262-.112t.125-.25q0-.125-.125-.25l-1.55-1.55V4q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.475q0 .025.125.3ZM6.5 16.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q6.925 14.5 6.5 14.5t-.713.287q-.287.288-.287.713t.287.712q.288.288.713.288Zm7 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm4-6.3q-1.55 0-2.625-1.075T13.8 6.5q0-1.55 1.075-2.625T17.5 2.8q1.55 0 2.625 1.075T21.2 6.5q0 1.55-1.075 2.625T17.5 10.2ZM5.35 20.7q-.15 0-.25-.1t-.1-.25V18.5q-.5-.125-1.1-.837-.6-.713-.6-1.663V7q0-.65.388-1.188.387-.537 1.337-.912T7.6 4.362Q9.225 4.2 11.7 4.3q-.275.625-.362 1.538-.088.912.037 1.562H4v4.9h11.3q.275.125.725.237.45.113.675.113V16q0 .95-.6 1.663-.6.712-1.1.837v1.85q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V18.7H5.7v1.65q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialDepartureBoardW100Filled.displayName = 'AmauiIconMaterialDepartureBoardW100Filled';

export default IconMaterialDepartureBoardW100Filled;
