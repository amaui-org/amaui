import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseWithShieldFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseWithShieldFilled'

      short_name='HouseWithShield'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 12.55q0 1.65.95 3.2.95 1.55 2.575 2.1.125.05.237.063.113.012.238.012.125 0 .238-.012.112-.013.237-.063 1.625-.55 2.575-2.1.95-1.55.95-3.2v-1.625q0-.425-.225-.788-.225-.362-.6-.562l-2.5-1.25q-.325-.15-.675-.15-.35 0-.675.15l-2.5 1.25q-.375.2-.6.562Q8 10.5 8 10.925ZM6 21q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9.212-.425.587-.7l6-4.5q.525-.4 1.2-.4.675 0 1.2.4l6 4.5q.375.275.588.7.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21Z"/>
    </Icon>
  );
});

IconMaterialHouseWithShieldFilled.displayName = 'AmauiIconMaterialHouseWithShieldFilled';

export default IconMaterialHouseWithShieldFilled;
