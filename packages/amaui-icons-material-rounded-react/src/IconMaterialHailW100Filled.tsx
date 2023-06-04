import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HailW100Filled'

      short_name='Hail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5.7q-.675 0-1.137-.463Q10.4 4.775 10.4 4.1t.463-1.138Q11.325 2.5 12 2.5t1.138.462q.462.463.462 1.138 0 .675-.462 1.137Q12.675 5.7 12 5.7Zm-1.6 15.65q-.15 0-.25-.1t-.1-.25V8.475Q8.475 8.9 7.6 9.862q-.875.963-1.15 2.663-.025.125-.138.225-.112.1-.237.1-.15 0-.25-.112-.1-.113-.075-.263.325-2.425 1.963-3.675Q9.35 7.55 12 7.55q2.55 0 3.975-.675Q17.4 6.2 17.625 3.9q.025-.15.125-.25t.25-.1q.15 0 .25.1t.075.25q-.15 1.925-1.25 3T13.95 8.15V21q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-5.5h-2.5V21q0 .15-.1.25t-.25.1Zm-4.5 0q-.325 0-.537-.212-.213-.213-.213-.538v-3.2q0-.325.213-.538.212-.212.537-.212h.2q.325 0 .538.212.212.213.212.538v3.2q0 .325-.212.538-.213.212-.538.212Z"/>
    </Icon>
  );
});

IconMaterialHailW100Filled.displayName = 'AmauiIconMaterialHailW100Filled';

export default IconMaterialHailW100Filled;
