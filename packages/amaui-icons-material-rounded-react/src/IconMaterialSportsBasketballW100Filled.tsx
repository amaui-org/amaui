import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsBasketballW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsBasketballW100Filled'

      short_name='SportsBasketball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.325 11.65q.05-1.4.5-2.65t1.25-2.3q.95.975 1.55 2.288.6 1.312.675 2.662Zm13.375 0q.075-1.35.625-2.613.55-1.262 1.6-2.262.8 1.05 1.25 2.287.45 1.238.5 2.588ZM5.075 17.225q-.8-1.05-1.225-2.262-.425-1.213-.525-2.613H7.3q-.075 1.35-.675 2.613-.6 1.262-1.55 2.262Zm13.85 0q-1.05-1-1.6-2.262-.55-1.263-.625-2.613h3.975q-.05 1.35-.5 2.588-.45 1.237-1.25 2.287Zm-10.9-5.575Q7.95 10.1 7.3 8.725q-.65-1.375-1.775-2.5 1.15-1.275 2.738-2.05 1.587-.775 3.387-.85v8.325Zm4.325 0V3.325q1.8.075 3.388.85 1.587.775 2.737 2.05-1.15 1.05-1.787 2.463-.638 1.412-.713 2.962Zm-.7 9.025Q9.8 20.6 8.238 19.8q-1.563-.8-2.713-2.075 1.15-1.075 1.787-2.438.638-1.362.713-2.937h3.625Zm.7 0V12.35h3.625q.075 1.575.713 2.975.637 1.4 1.787 2.45-1.15 1.275-2.737 2.05-1.588.775-3.388.85Z"/>
    </Icon>
  );
});

IconMaterialSportsBasketballW100Filled.displayName = 'AmauiIconMaterialSportsBasketballW100Filled';

export default IconMaterialSportsBasketballW100Filled;
