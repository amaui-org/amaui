import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRvHookup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RvHookup'

      short_name='RvHookup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.5 21.5-1.4-1.4 1.1-1.1h-7.4q-.3.9-1.075 1.45Q9.95 21 9 21q-.95 0-1.712-.55Q6.525 19.9 6.2 19H2v-9h6V7H2V5h15v12h2.15l-1.05-1.05 1.4-1.45L23 18ZM10 10h5V7h-5Zm-1 9q.425 0 .713-.288Q10 18.425 10 18t-.287-.712Q9.425 17 9 17t-.712.288Q8 17.575 8 18t.288.712Q8.575 19 9 19Zm-2.8-2q.325-.9 1.088-1.45Q8.05 15 9 15t1.725.55Q11.5 16.1 11.8 17H15v-5H4v5Zm0-5H4h11-8.8Z"/>
    </Icon>
  );
});

IconMaterialRvHookup.displayName = 'AmauiIconMaterialRvHookup';

export default IconMaterialRvHookup;
