import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventRepeatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventRepeatFilled'

      short_name='EventRepeat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22V4h3V2h2v2h8V2h2v2h3v8h-2v-2H5v10h7v2Zm16 2q-1.825 0-3.188-1.137Q14.45 21.725 14.1 20h1.55q.325 1.1 1.238 1.8.912.7 2.112.7 1.45 0 2.475-1.025Q22.5 20.45 22.5 19q0-1.45-1.025-2.475Q20.45 15.5 19 15.5q-.725 0-1.35.262-.625.263-1.1.738H18V18h-4v-4h1.5v1.425q.675-.65 1.575-1.038Q17.975 14 19 14q2.075 0 3.538 1.463Q24 16.925 24 19t-1.462 3.538Q21.075 24 19 24Z"/>
    </Icon>
  );
});

IconMaterialEventRepeatFilled.displayName = 'AmauiIconMaterialEventRepeatFilled';

export default IconMaterialEventRepeatFilled;
