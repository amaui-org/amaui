import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMopRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MopRoundedW100'
      short_name='Mop'

      {...props}
    >
      <path d="M10.6 11.65h2.8v-7.4q0-.575-.412-.988-.413-.412-.988-.412t-.987.412q-.413.413-.413.988Zm-5.75 3.5h14.3v-2q0-.35-.225-.575-.225-.225-.575-.225H5.65q-.35 0-.575.225-.225.225-.225.575Zm-.6 6H6.9V18.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h4.05V18.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h4.05V18.5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65h2.65q.4 0 .65-.313.25-.312.125-.687l-1.3-4.3H4.775l-1.3 4.3q-.125.375.125.687.25.313.65.313Zm15.7.7H4.05q-.65 0-1.075-.525-.425-.525-.225-1.175l1.4-4.575V13q0-.575.388-.963.387-.387.962-.387h4.4v-7.4q0-.875.612-1.488.613-.612 1.488-.612t1.488.612q.612.613.612 1.488v7.4h4.4q.575 0 .962.387.388.388.388.963v2.575l1.4 4.625q.2.625-.225 1.137-.425.513-1.075.513Zm-.8-9.5H4.85 19.15Zm-5.75-.7h-2.8 2.8Z"/>
    </Icon>
  );
});

IconMaterialMopRoundedW100.displayName = 'AmauiIconMaterialMopRoundedW100';

export default IconMaterialMopRoundedW100;
