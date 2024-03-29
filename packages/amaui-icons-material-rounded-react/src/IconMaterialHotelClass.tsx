import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHotelClass = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelClass'

      short_name='HotelClass'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 12.775ZM6.05 21.05q-.275.225-.587.025-.313-.2-.188-.55L7.15 14.4l-4.875-3.5q-.3-.2-.187-.55Q2.2 10 2.55 10H8.6l1.925-6.4q.05-.2.188-.275.137-.075.287-.075.15 0 .288.075.137.075.187.275L13.4 10h6.05q.35 0 .463.35.112.35-.188.55l-4.875 3.5 1.875 6.125q.125.35-.187.55-.313.2-.588-.025L11 17.3Zm2.55-4.4L11 14.8l2.4 1.85-.9-3.05 2.25-1.6h-2.8L11 8.9l-.95 3.1h-2.8l2.25 1.6Zm11.5 4.4-1.475-1.125L17.15 15.2l3.1-2.2h1.875q.35 0 .475.35t-.175.55L19.5 16l1.4 4.5q.125.35-.2.562-.325.213-.6-.012ZM14.9 8l-.75-2.55.55-1.85q.05-.2.187-.288.138-.087.288-.087.15 0 .288.1.137.1.187.275L17 8Z"/>
    </Icon>
  );
});

IconMaterialHotelClass.displayName = 'AmauiIconMaterialHotelClass';

export default IconMaterialHotelClass;
