import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHideSource = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideSource'

      short_name='HideSource'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.075 21.9 17.5 20.35q-1.225.8-2.612 1.225Q13.5 22 12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-1.5.425-2.888Q2.85 7.725 3.65 6.5L2.075 4.925q-.275-.275-.287-.688-.013-.412.287-.712t.713-.3q.412 0 .712.3l17 16.975q.275.275.288.688.012.412-.288.712t-.712.3q-.413 0-.713-.3ZM12 20q1.075 0 2.088-.275 1.012-.275 1.962-.825L5.1 7.95q-.55.95-.825 1.962Q4 10.925 4 12q0 3.325 2.338 5.663Q8.675 20 12 20Zm8.35-2.5-1.45-1.45q.55-.95.825-1.963Q20 13.075 20 12q0-3.325-2.337-5.663Q15.325 4 12 4q-1.075 0-2.087.275Q8.9 4.55 7.95 5.1L6.5 3.65q1.225-.8 2.613-1.225Q10.5 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 1.5-.425 2.887-.425 1.388-1.225 2.613Zm-6.925-6.925Zm-2.85 2.85Z"/>
    </Icon>
  );
});

IconMaterialHideSource.displayName = 'AmauiIconMaterialHideSource';

export default IconMaterialHideSource;
