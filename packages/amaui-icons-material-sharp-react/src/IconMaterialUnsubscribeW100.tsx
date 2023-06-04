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
      <path d="M3.3 18.7V5.3h17.4v7.25q-.125-.05-.312-.088-.188-.037-.388-.087v-5.8l-8 5.275-8-5.275V18h9.3v.35q0 .15.05.35ZM12 11l7.6-5H4.4Zm7 10.7q-1.55 0-2.625-1.075T15.3 18q0-1.55 1.075-2.625T19 14.3q1.55 0 2.625 1.075T22.7 18q0 1.55-1.075 2.625T19 21.7Zm-2.15-3.35h4.3v-.7h-4.3ZM4 18Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribeW100.displayName = 'AmauiIconMaterialUnsubscribeW100';

export default IconMaterialUnsubscribeW100;
