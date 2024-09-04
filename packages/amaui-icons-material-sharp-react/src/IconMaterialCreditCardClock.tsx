import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardClock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardClock'

      short_name='CreditCardClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m787-185 28-28-75-75v-112h-40v128l87 87ZM721-80q-84 0-142.5-58T520-280q0-84 58.5-142T721-480q83 0 141 58.5T920-280q0 83-58 141.5T721-80ZM160-240v-320 13-173 480Zm0-400h640v-80H160v80Zm303 480H80v-640h800v293q-35-25-76.5-39T716-560q-57 0-107.5 21.5T520-480H160v240h279q3 21 9 41t15 39Z"/>
    </Icon>
  );
});

IconMaterialCreditCardClock.displayName = 'AmauiIconMaterialCreditCardClock';

export default IconMaterialCreditCardClock;
