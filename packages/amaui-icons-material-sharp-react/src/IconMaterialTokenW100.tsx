import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTokenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TokenW100'

      short_name='Token'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21.25-8.35-4.625v-9.25L12 2.75l8.35 4.625v9.25Zm-2.775-11.2q.575-.725 1.3-1.063Q11.25 8.65 12 8.65q.775 0 1.488.337.712.338 1.287 1.063l4.45-2.475L12 3.55 4.775 7.575Zm2.425 10.2v-4.875q-1.3-.2-2.15-1.138Q8.65 13.3 8.65 12q0-.35.063-.65.062-.3.187-.65L4.35 8.15v8.05Zm.35-5.6q1.1 0 1.875-.775.775-.775.775-1.875t-.775-1.875Q13.1 9.35 12 9.35t-1.875.775Q9.35 10.9 9.35 12t.775 1.875q.775.775 1.875.775Zm.35 5.6 7.3-4.05V8.15L15.1 10.7q.125.375.188.662.062.288.062.638 0 1.3-.85 2.237-.85.938-2.15 1.138Z"/>
    </Icon>
  );
});

IconMaterialTokenW100.displayName = 'AmauiIconMaterialTokenW100';

export default IconMaterialTokenW100;
