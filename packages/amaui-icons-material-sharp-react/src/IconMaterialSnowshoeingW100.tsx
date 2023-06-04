import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnowshoeingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnowshoeingW100'

      short_name='Snowshoeing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.525 5.1q.65 0 1.125-.475t.475-1.125q0-.65-.475-1.125T14.525 1.9q-.65 0-1.125.475T12.925 3.5q0 .65.475 1.125t1.125.475Zm-2.1 17.5v-.7h2.25v-5.125l-3.15-3.025-.9 3.95-3.7 2.65.475.65q.3.425.6.613.3.187.675.312.125.05.2.15.075.1.075.2 0 .125-.1.237-.1.113-.225.113-.4 0-.85-.3-.45-.3-1-1l-2.15-2.75.55-.425 1.3 1.65 3.35-2.425 1.85-9.575-3.3 1.375v3.175h-.7V8.7l3.7-1.525q.725-.3 1.05-.4.325-.1.6-.1.35 0 .65.175.3.175.5.5l.975 1.575q.65 1.05 1.75 1.775 1.1.725 2.475.9v.7q-1.55-.15-2.887-1.038-1.338-.887-2.288-2.537l-.975 4.975 2.15 2.1v6.1q.85 0 1.225-.05.375-.05.9-.3.15-.075.263-.137.112-.063.187-.063.125 0 .225.1t.1.225q0 .15-.1.263-.1.112-.275.187-.525.275-1.012.375-.488.1-1.188.1Z"/>
    </Icon>
  );
});

IconMaterialSnowshoeingW100.displayName = 'AmauiIconMaterialSnowshoeingW100';

export default IconMaterialSnowshoeingW100;
