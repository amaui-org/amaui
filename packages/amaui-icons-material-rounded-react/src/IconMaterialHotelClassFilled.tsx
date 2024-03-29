import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHotelClassFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClassFilled'

      short_name='HotelClass'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.05 21.05q-.275.225-.587.025-.313-.2-.188-.55L7.15 14.4l-4.875-3.5q-.3-.2-.187-.55Q2.2 10 2.55 10H8.6l1.925-6.4q.05-.2.188-.275.137-.075.287-.075.15 0 .288.075.137.075.187.275L13.4 10h6.05q.35 0 .463.35.112.35-.188.55l-4.875 3.5 1.875 6.125q.125.35-.187.55-.313.2-.588-.025L11 17.3Zm14.05 0-1.475-1.125L17.15 15.2l3.1-2.2h1.875q.35 0 .475.35t-.175.55L19.5 16l1.4 4.5q.125.35-.2.562-.325.213-.6-.012ZM14.9 8l-.75-2.55.55-1.85q.05-.2.187-.288.138-.087.288-.087.15 0 .288.1.137.1.187.275L17 8Z"/>
    </Icon>
  );
});

IconMaterialHotelClassFilled.displayName = 'AmauiIconMaterialHotelClassFilled';

export default IconMaterialHotelClassFilled;
