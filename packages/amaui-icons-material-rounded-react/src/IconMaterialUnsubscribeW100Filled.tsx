import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnsubscribeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnsubscribeW100Filled'

      short_name='Unsubscribe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 21.7q-1.55 0-2.625-1.075T15.3 18q0-1.55 1.075-2.625T19 14.3q1.55 0 2.625 1.075T22.7 18q0 1.55-1.075 2.625T19 21.7Zm-1.8-3.35h3.6q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.6q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-12.4.35q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v5.75q-.425-.125-.85-.188-.425-.062-.85-.062-1.175 0-2.212.45-1.038.45-1.813 1.225-.775.775-1.225 1.812-.45 1.038-.45 2.213v.35q0 .15.05.35Zm7.2-7q.125 0 .225-.038.1-.037.2-.087l7.275-4.8q.125-.075.15-.225.025-.15-.05-.275-.075-.125-.212-.15-.138-.025-.263.05L12 11 4.675 6.2q-.1-.1-.25-.075-.15.025-.225.15-.075.125-.05.275.025.15.15.225l7.275 4.8q.1.05.2.087.1.038.225.038Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribeW100Filled.displayName = 'AmauiIconMaterialUnsubscribeW100Filled';

export default IconMaterialUnsubscribeW100Filled;
