import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoneyOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyOffW100Filled'

      short_name='MoneyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.35 8.525q-.3-.75-.887-1.175-.588-.425-1.413-.425-.45 0-.975.175-.525.175-.875.6l-.5-.5q.375-.425.913-.663.537-.237 1.037-.287v-1.5h.7v1.5q.725.05 1.475.512.75.463 1.175 1.488ZM19.2 20.2l-4.05-4.05q-.425.65-1.2 1.1-.775.45-1.6.45v1.5h-.7v-1.55q-1.2-.2-1.887-.95-.688-.75-1.113-2l.65-.25q.325 1.05 1.025 1.8T12.2 17q.8 0 1.437-.375.638-.375 1.013-.975L3.8 4.8l.5-.5 15.4 15.4Z"/>
    </Icon>
  );
});

IconMaterialMoneyOffW100Filled.displayName = 'AmauiIconMaterialMoneyOffW100Filled';

export default IconMaterialMoneyOffW100Filled;
