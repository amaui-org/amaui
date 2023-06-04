import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLinkOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkOffW100Filled'

      short_name='LinkOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.15 12.35-.7-.7h.7q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm3.2 3.2L17.8 15q.95-.275 1.625-1.113.675-.837.675-1.887 0-1.275-.912-2.188Q18.275 8.9 17 8.9h-3.2q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H17q1.575 0 2.688 1.112Q20.8 10.425 20.8 12q0 1.275-.7 2.162-.7.888-1.75 1.388Zm2.05 5.9L2.5 3.55q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l17.9 17.9q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125ZM10.15 15.8H7q-1.575 0-2.688-1.112Q3.2 13.575 3.2 12q0-1.575 1.112-2.688Q5.425 8.2 7 8.2h.65l.7.7H7q-1.275 0-2.188.912Q3.9 10.725 3.9 12q0 1.275.912 2.188.913.912 2.188.912h3.15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm1.625-3.45H8.85q-.15 0-.25-.1T8.5 12q0-.15.1-.25t.25-.1h2.25Z"/>
    </Icon>
  );
});

IconMaterialLinkOffW100Filled.displayName = 'AmauiIconMaterialLinkOffW100Filled';

export default IconMaterialLinkOffW100Filled;
