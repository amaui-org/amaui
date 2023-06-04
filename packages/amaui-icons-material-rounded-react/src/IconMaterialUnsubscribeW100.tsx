import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnsubscribeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnsubscribeW100'

      short_name='Unsubscribe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v5.75q-.125-.05-.312-.088-.188-.037-.388-.087v-5.8l-7.575 5q-.1.05-.2.087-.1.038-.225.038t-.225-.038q-.1-.037-.2-.087L4 6.575V17.2q0 .35.225.575Q4.45 18 4.8 18h8.5v.35q0 .15.05.35ZM12 11l7.6-5H4.4Zm7 10.7q-1.55 0-2.625-1.075T15.3 18q0-1.55 1.075-2.625T19 14.3q1.55 0 2.625 1.075T22.7 18q0 1.55-1.075 2.625T19 21.7Zm-1.8-3.35h3.6q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.6q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM4 18v-5.7.075-5.8.2-.65.05V6v.2-.075.65-.2V18Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribeW100.displayName = 'AmauiIconMaterialUnsubscribeW100';

export default IconMaterialUnsubscribeW100;
