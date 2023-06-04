import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsKabaddiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsKabaddiW100Filled'

      short_name='SportsKabaddi'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.8 4.75q-.675 0-1.137-.463-.463-.462-.463-1.137t.463-1.138q.462-.462 1.137-.462t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm-6.1 4.1q-.675 0-1.138-.463Q9.1 7.925 9.1 7.25t.462-1.138q.463-.462 1.138-.462.675 0 1.138.462.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463ZM1.3 21.1l-.5-.5 3.5-3.5L2.75 13 6.7 9.05q.2-.2.425-.3.225-.1.525-.1.3 0 .525.1.225.1.425.3L10.65 11q.7.675 1.6 1.075.9.4 1.95.525v.7q-1.175-.125-2.225-.588-1.05-.462-1.725-1.112L9.1 10.5l-3.25 3.25 2.35 2.4v5.2h-.7v-4.9l-2.6-2.4v3.45Zm14.2.25V15.3l2.2-2.1-1-5.2q-.875 1.075-1.825 1.938-.95.862-2.175 1.187-.225-.05-.462-.163-.238-.112-.438-.287 1.175-.175 2.313-1.025 1.137-.85 1.637-1.7l.95-1.6q.3-.5.813-.638.512-.137 1.037.088l4.65 1.95v3.6h-.7V8.2l-3.3-1.35 2.85 14.5h-.8l-1.875-7.925L16.2 15.75v5.6Z"/>
    </Icon>
  );
});

IconMaterialSportsKabaddiW100Filled.displayName = 'AmauiIconMaterialSportsKabaddiW100Filled';

export default IconMaterialSportsKabaddiW100Filled;
