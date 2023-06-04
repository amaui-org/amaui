import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOverviewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OverviewW100Filled'

      short_name='Overview'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.35 18v-2.35q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v2.325q0 .15.05.287.05.138.175.263l1.55 1.55q.1.1.238.113.137.012.262-.113.1-.1.1-.25t-.1-.25ZM18 21.85q-1.55 0-2.625-1.075T14.3 18.15q0-1.55 1.075-2.625T18 14.45q1.55 0 2.625 1.075T21.7 18.15q0 1.55-1.075 2.625T18 21.85ZM8 8.65h8q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm3.475 11.05H5.8q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h12.4q.625 0 1.063.437.437.438.437 1.063v5.725q-.425-.1-.85-.163-.425-.062-.85-.062-.575 0-1.125.1t-1.075.275q-.075-.025-.175-.025H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h6.375q-.85.55-1.488 1.312-.637.763-1.037 1.688H8q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h3.575q-.125.475-.2.962-.075.488-.075.988 0 .35.025.85t.15.85Z"/>
    </Icon>
  );
});

IconMaterialOverviewW100Filled.displayName = 'AmauiIconMaterialOverviewW100Filled';

export default IconMaterialOverviewW100Filled;
