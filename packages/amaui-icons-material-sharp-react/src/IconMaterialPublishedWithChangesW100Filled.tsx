import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPublishedWithChangesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishedWithChangesW100Filled'

      short_name='PublishedWithChanges'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.35 20.55q-1.55-.325-2.85-1.112-1.3-.788-2.237-1.913-.938-1.125-1.451-2.538Q3.3 13.575 3.3 12q0-2.125.938-3.963Q5.175 6.2 7.125 4.8h-3.15v-.7H8.35v4.375h-.7V5.3q-1.875 1.25-2.762 3Q4 10.05 4 12q0 2.8 1.725 4.988 1.725 2.187 4.625 2.837Zm.225-4.85L7.25 12.375l.5-.5 2.825 2.825 5.675-5.675.5.5Zm5.075 4.225V15.55h.7v3.175Q18.2 17.45 19.1 15.7q.9-1.75.9-3.7 0-2.8-1.725-4.988-1.725-2.187-4.625-2.837V3.45q3.125.65 5.088 3.012Q20.7 8.825 20.7 12q0 2.125-.937 3.975-.938 1.85-2.888 3.25h3.15v.7Z"/>
    </Icon>
  );
});

IconMaterialPublishedWithChangesW100Filled.displayName = 'AmauiIconMaterialPublishedWithChangesW100Filled';

export default IconMaterialPublishedWithChangesW100Filled;
