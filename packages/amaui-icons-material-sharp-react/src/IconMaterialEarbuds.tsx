import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEarbuds = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Earbuds'

      short_name='Earbuds'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21q-2.075 0-3.537-1.462Q3 18.075 3 16V6.2q0-1.35.825-2.275Q4.65 3 6 3h3v6H5v7q0 1.25.875 2.125T8 19q1.25 0 2.125-.875T11 16V8q0-2.075 1.463-3.537Q13.925 3 16 3t3.538 1.463Q21 5.925 21 8v10q0 1.275-.962 2.137Q19.075 21 17.8 21H15v-6h4V8q0-1.25-.875-2.125T16 5q-1.25 0-2.125.875T13 8v8q0 2.075-1.462 3.538Q10.075 21 8 21ZM5 7h2V5H6q-.425 0-.713.287Q5 5.575 5 6Zm12 12h1q.425 0 .712-.288Q19 18.425 19 18v-1h-2ZM6 6Zm12 12Z"/>
    </Icon>
  );
});

IconMaterialEarbuds.displayName = 'AmauiIconMaterialEarbuds';

export default IconMaterialEarbuds;
