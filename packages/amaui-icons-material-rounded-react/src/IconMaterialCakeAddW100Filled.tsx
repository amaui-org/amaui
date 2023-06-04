import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCakeAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeAddW100Filled'

      short_name='CakeAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.95 20.7q-.275 0-.462-.213Q3.3 20.275 3.3 20v-4.2q0-.625.437-1.063.438-.437 1.063-.437h12.4q.625 0 1.062.437.438.438.438 1.063V20q0 .275-.212.487-.213.213-.488.213Zm1.35-7.1v-4q0-.625.438-1.063Q6.175 8.1 6.8 8.1h3.85V6.6q-.425-.275-.712-.613Q9.65 5.65 9.65 5.2q0-.275.1-.512.1-.238.3-.438l.675-.675q.025-.025.275-.125.05 0 .275.125l.675.675q.2.2.3.438.1.237.1.512 0 .45-.288.787-.287.338-.712.613v1.5h3.85q.625 0 1.062.437.438.438.438 1.063v4ZM19.35 8q-.15 0-.25-.1t-.1-.25V6h-1.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H19V3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H19.7v1.65q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialCakeAddW100Filled.displayName = 'AmauiIconMaterialCakeAddW100Filled';

export default IconMaterialCakeAddW100Filled;
