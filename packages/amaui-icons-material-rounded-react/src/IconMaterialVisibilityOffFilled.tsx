import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVisibilityOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityOffFilled'

      short_name='VisibilityOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.3 16.5-3.2-3.2q.2-.425.3-.862.1-.438.1-.938 0-1.875-1.312-3.188Q13.875 7 12 7q-.5 0-.938.1-.437.1-.862.3L7.65 4.85q1.025-.425 2.1-.638Q10.825 4 12 4q3.575 0 6.425 1.887 2.85 1.888 4.275 4.913.075.125.1.312.025.188.025.388t-.037.387q-.038.188-.088.313-.575 1.275-1.437 2.375-.863 1.1-1.963 1.925Zm-.2 5.4-3.5-3.45q-.875.275-1.762.413Q12.95 19 12 19q-3.575 0-6.425-1.887Q2.725 15.225 1.3 12.2q-.075-.125-.1-.313-.025-.187-.025-.387t.025-.375q.025-.175.1-.3Q1.825 9.7 2.55 8.75 3.275 7.8 4.15 7L2.075 4.9Q1.8 4.625 1.8 4.212q0-.412.3-.712.275-.275.7-.275.425 0 .7.275l17 17q.275.275.288.688.012.412-.288.712-.275.275-.7.275-.425 0-.7-.275ZM12 16q.275 0 .512-.025.238-.025.513-.1l-5.4-5.4q-.075.275-.1.513-.025.237-.025.512 0 1.875 1.312 3.188Q10.125 16 12 16Zm2.65-4.15-3-3q1.425-.225 2.325.8.9 1.025.675 2.2Z"/>
    </Icon>
  );
});

IconMaterialVisibilityOffFilled.displayName = 'AmauiIconMaterialVisibilityOffFilled';

export default IconMaterialVisibilityOffFilled;
