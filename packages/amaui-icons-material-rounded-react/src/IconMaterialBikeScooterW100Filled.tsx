import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBikeScooterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeScooterW100Filled'

      short_name='BikeScooter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 20.4q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663Q9.025 15.7 10 15.7q.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662-.688.688-1.663.688ZM.3 18.35v-.7h4.65q.15-1.8 1.425-3.125Q7.65 13.2 9.35 13.05L7.8 5.95q-.075-.275-.3-.438-.225-.162-.45-.162H4.3q-.15 0-.25-.1T3.95 5q0-.15.1-.25t.25-.1h2.75q.45 0 .888.312.437.313.562.838l1.7 7.9H10q-1.8 0-3.075 1.275Q5.65 16.25 5.65 18.05v.3Zm19-1.05q-1.725 0-2.937-1.088-1.213-1.087-1.413-2.862h-2.8l-.15-.7h2.95q.075-.725.562-1.788Q16 9.8 16.95 9.3H11.3l-.15-.7h6.15l-1.75-4.8q-.075-.225-.25-.338-.175-.112-.4-.112h-2.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.6q.425 0 .788.237.362.238.512.663l1.85 5.05h1.25q1.85 0 3.1 1.25t1.25 3.1q0 1.775-1.312 3.062Q21.025 17.3 19.3 17.3Zm-.275-4.925q.125-.05.188-.187.062-.138.012-.263L18.3 9.45l-.6.25.875 2.475q.05.15.188.2.137.05.262 0Z"/>
    </Icon>
  );
});

IconMaterialBikeScooterW100Filled.displayName = 'AmauiIconMaterialBikeScooterW100Filled';

export default IconMaterialBikeScooterW100Filled;
