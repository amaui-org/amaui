import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutopayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutopayW100Filled'

      short_name='Autopay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.7q-3.125 0-5.562-1.725Q4 18.25 2.875 15.325V17.8h-.7v-3.7h3.7v.7H3.45q.9 2.8 3.275 4.5Q9.1 21 12 21q1.775 0 3.338-.625 1.562-.625 2.762-1.738 1.2-1.112 1.962-2.65.763-1.537.913-3.337h.7q-.125 1.9-.937 3.55-.813 1.65-2.1 2.875-1.288 1.225-3 1.925-1.713.7-3.638.7ZM7.6 4.15l-.4-.6q1.075-.625 2.288-.938Q10.7 2.3 12 2.3q3.05 0 5.562 1.737 2.513 1.738 3.563 4.738V6.2h.7v3.7h-3.7v-.7h2.425q-.825-2.7-3.212-4.45Q14.95 3 12 3q-1.2 0-2.3.287-1.1.288-2.1.863ZM4 10.45l-.75-1.7L1.55 8l1.7-.75.75-1.7.75 1.7 1.7.75-1.7.75ZM8.275 16l3.55-9h.35l3.6 9h-.8l-1.1-2.7h-3.75l-1.1 2.7Zm2.1-3.35h3.25l-1.6-4.1h-.1Z"/>
    </Icon>
  );
});

IconMaterialAutopayW100Filled.displayName = 'AmauiIconMaterialAutopayW100Filled';

export default IconMaterialAutopayW100Filled;
