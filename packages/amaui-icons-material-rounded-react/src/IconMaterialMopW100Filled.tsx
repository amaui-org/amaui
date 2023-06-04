import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MopW100Filled'

      short_name='Mop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.25 21.15H6.9V18.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h4.05V18.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h4.05V18.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h2.65q.4 0 .65-.313.25-.312.125-.687l-1.3-4.3H4.775l-1.3 4.3q-.125.375.125.687.25.313.65.313Zm15.7.7H4.05q-.65 0-1.075-.525-.425-.525-.225-1.175l1.4-4.575V13q0-.575.388-.963.387-.387.962-.387h4.4v-7.4q0-.875.612-1.488.613-.612 1.488-.612t1.488.612q.612.613.612 1.488v7.4h4.4q.575 0 .962.387.388.388.388.963v2.575l1.4 4.625q.2.625-.225 1.137-.425.513-1.075.513Z"/>
    </Icon>
  );
});

IconMaterialMopW100Filled.displayName = 'AmauiIconMaterialMopW100Filled';

export default IconMaterialMopW100Filled;
