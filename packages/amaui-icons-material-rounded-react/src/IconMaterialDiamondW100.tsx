import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiamondW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiamondW100'

      short_name='Diamond'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.575q-.15 0-.287-.063-.138-.062-.263-.187L3.075 9.25q-.125-.175-.162-.363-.038-.187.062-.387L5.2 4.025q.1-.175.263-.275.162-.1.362-.1h12.35q.2 0 .363.1.162.1.262.275L21.025 8.5q.1.2.062.387-.037.188-.162.363L12.55 19.325q-.125.125-.262.187-.138.063-.288.063ZM8.575 8.65h6.85l-2.15-4.3h-2.55Zm3.075 9.825V9.35H4.075Zm.7 0 7.575-9.125H12.35ZM16.2 8.65h4.1l-2.125-4.3H14.05Zm-12.5 0h4.1l2.15-4.3H5.825Z"/>
    </Icon>
  );
});

IconMaterialDiamondW100.displayName = 'AmauiIconMaterialDiamondW100';

export default IconMaterialDiamondW100;
