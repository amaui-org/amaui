import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPublishedWithChangesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishedWithChangesW100'

      short_name='PublishedWithChanges'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.075 3.55q2.95.75 4.788 3.075Q20.7 8.95 20.7 12q0 2.125-.937 3.975-.938 1.85-2.888 3.25h2.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H16.4q-.325 0-.537-.213-.213-.212-.213-.537V15.9q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.825Q18.2 17.45 19.1 15.7q.9-1.75.9-3.7 0-2.75-1.65-4.888-1.65-2.137-4.425-2.862-.125-.05-.2-.15-.075-.1-.075-.225 0-.2.125-.288.125-.087.3-.037Zm-4.15 16.9q-2.95-.75-4.787-3.063Q3.3 15.075 3.3 12q0-2.125.938-3.963Q5.175 6.2 7.125 4.8h-2.8q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H7.6q.325 0 .537.212.213.213.213.538v3.275q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V5.3q-1.875 1.25-2.762 3Q4 10.05 4 12q0 2.725 1.638 4.875 1.637 2.15 4.437 2.875.125.05.2.15.075.1.075.225 0 .2-.125.288-.125.087-.3.037Zm.65-5.05q-.15 0-.275-.05-.125-.05-.25-.175l-2.55-2.55q-.125-.125-.125-.25t.125-.25Q7.625 12 7.75 12t.25.125l2.575 2.575L16 9.275q.1-.1.238-.1.137 0 .262.1.125.125.125.25t-.125.25l-5.4 5.4q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialPublishedWithChangesW100.displayName = 'AmauiIconMaterialPublishedWithChangesW100';

export default IconMaterialPublishedWithChangesW100;
