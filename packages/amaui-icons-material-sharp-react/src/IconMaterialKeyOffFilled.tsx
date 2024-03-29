import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyOffFilled'

      short_name='KeyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19 16-2-2-.075.1-4.1-4.1H21l2 1.95ZM7 15q1.075 0 1.875-.663.8-.662 1.025-1.612l-.562-.563-1.25-1.25-1.25-1.25-.563-.562q-1.05.225-1.662 1.062Q4 11 4 12q0 1.25.875 2.125T7 15Zm12.75 7.575-7.55-7.55q-.8 1.35-2.175 2.163Q8.65 18 7 18q-2.5 0-4.25-1.75T1 12q0-1.65.812-3.025Q2.625 7.6 3.975 6.8l-2.55-2.55 1.425-1.4 18.3 18.325Z"/>
    </Icon>
  );
});

IconMaterialKeyOffFilled.displayName = 'AmauiIconMaterialKeyOffFilled';

export default IconMaterialKeyOffFilled;
