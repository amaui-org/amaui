import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTimer10Alt1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer10Alt1Filled'

      short_name='Timer10Alt1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.75 17.225V10.6h-1.2V8.775h3v8.45Zm4.45 0q-.75 0-1.275-.525-.525-.525-.525-1.275V10.6q0-.75.525-1.288.525-.537 1.275-.537h1.2q.75 0 1.288.537.537.538.537 1.288v4.825q0 .75-.537 1.275-.538.525-1.288.525Zm0-1.8h1.2V10.6h-1.2v4.825ZM9 3V1h6v2Zm3 19q-1.85 0-3.488-.712-1.637-.713-2.862-1.938t-1.938-2.862Q3 14.85 3 13t.712-3.488Q4.425 7.875 5.65 6.65t2.862-1.937Q10.15 4 12 4q1.55 0 2.975.5t2.675 1.45l1.4-1.4 1.4 1.4-1.4 1.4Q20 8.6 20.5 10.025 21 11.45 21 13q0 1.85-.712 3.488-.713 1.637-1.938 2.862t-2.862 1.938Q13.85 22 12 22Zm0-2q2.9 0 4.95-2.05Q19 15.9 19 13q0-2.9-2.05-4.95Q14.9 6 12 6 9.1 6 7.05 8.05 5 10.1 5 13q0 2.9 2.05 4.95Q9.1 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialTimer10Alt1Filled.displayName = 'AmauiIconMaterialTimer10Alt1Filled';

export default IconMaterialTimer10Alt1Filled;
