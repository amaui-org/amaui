import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonPinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinW100Filled'

      short_name='PersonPin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.15 9.55 18.7H4.3V3.3h15.4v15.4h-5.25Zm0-9.05q1.2 0 2.025-.825t.825-2.025q0-1.2-.825-2.025T12 6.4q-1.2 0-2.025.825T9.15 9.25q0 1.2.825 2.025T12 12.1Zm0 8.05L14.15 18H19v-.65q-1.35-1.325-3.137-2.088Q14.075 14.5 12 14.5t-3.862.762Q6.35 16.025 5 17.35V18h4.85Z"/>
    </Icon>
  );
});

IconMaterialPersonPinW100Filled.displayName = 'AmauiIconMaterialPersonPinW100Filled';

export default IconMaterialPersonPinW100Filled;
