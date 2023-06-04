import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactMailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactMailW100Filled'

      short_name='ContactMail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.8 19.2q-.65 0-1.075-.425Q1.3 18.35 1.3 17.7V6.3q0-.65.425-1.075Q2.15 4.8 2.8 4.8h18.4q.65 0 1.075.425.425.425.425 1.075v11.4q0 .65-.425 1.075-.425.425-1.075.425ZM9 14.3q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q9.975 9.6 9 9.6q-.975 0-1.662.687-.688.688-.688 1.663 0 .975.688 1.662.687.688 1.662.688Zm6-3.05h5q.325 0 .538-.213.212-.212.212-.537v-3q0-.325-.212-.537-.213-.213-.538-.213h-5q-.325 0-.537.213-.213.212-.213.537v3q0 .325.213.537.212.213.537.213ZM3.55 18.5h10.9Q13.4 17.3 12 16.55q-1.4-.75-3-.75t-3 .75q-1.4.75-2.45 1.95Zm13.95-8.35-2.45-1.7V7.6l2.45 1.7 2.45-1.7v.85Z"/>
    </Icon>
  );
});

IconMaterialContactMailW100Filled.displayName = 'AmauiIconMaterialContactMailW100Filled';

export default IconMaterialContactMailW100Filled;
