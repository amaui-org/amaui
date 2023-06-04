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
      <path d="M12 20.85q-.15 0-.275-.05-.125-.05-.25-.175L9.55 18.7H5.8q-.65 0-1.075-.425Q4.3 17.85 4.3 17.2V4.8q0-.65.425-1.075Q5.15 3.3 5.8 3.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425h-3.75l-1.925 1.925q-.125.125-.25.175-.125.05-.275.05Zm0-8.75q1.2 0 2.025-.825t.825-2.025q0-1.2-.825-2.025T12 6.4q-1.2 0-2.025.825T9.15 9.25q0 1.2.825 2.025T12 12.1Zm0 8.05L14.15 18h4.05q.35 0 .575-.2.225-.2.225-.45-1.35-1.325-3.137-2.088Q14.075 14.5 12 14.5t-3.862.762Q6.35 16.025 5 17.35q0 .25.225.45t.575.2h4.05Z"/>
    </Icon>
  );
});

IconMaterialPersonPinW100Filled.displayName = 'AmauiIconMaterialPersonPinW100Filled';

export default IconMaterialPersonPinW100Filled;
