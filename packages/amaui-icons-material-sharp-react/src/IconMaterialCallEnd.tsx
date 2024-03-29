import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallEnd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEnd'

      short_name='CallEnd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.2 14.4 6 13v-1.55q-.725.375-1.4.862-.675.488-1.4 1.088Zm15.6 0 1-.95q-.725-.65-1.4-1.125-.675-.475-1.4-.825V13ZM18 11.5Zm-12-.05ZM4.025 17 .4 13.475q2.35-2.75 5.35-4.112Q8.75 8 12 8t6.238 1.363q2.987 1.362 5.362 4.112L19.975 17 16 14v-3.35q-.95-.3-1.95-.475T12 10q-1.05 0-2.05.175-1 .175-1.95.475V14Z"/>
    </Icon>
  );
});

IconMaterialCallEnd.displayName = 'AmauiIconMaterialCallEnd';

export default IconMaterialCallEnd;
