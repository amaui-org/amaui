import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHideSourceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideSourceFilled'

      short_name='HideSource'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.625 17.5 20.35q-1.225.8-2.612 1.225Q13.5 22 12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12q0-1.5.425-2.888Q2.85 7.725 3.65 6.5L1.375 4.225 2.8 2.8l18.4 18.4Zm.575-5.125L6.5 3.65q1.225-.8 2.613-1.225Q10.5 2 12 2q2.075 0 3.9.787 1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12q0 1.5-.425 2.887-.425 1.388-1.225 2.613Z"/>
    </Icon>
  );
});

IconMaterialHideSourceFilled.displayName = 'AmauiIconMaterialHideSourceFilled';

export default IconMaterialHideSourceFilled;
