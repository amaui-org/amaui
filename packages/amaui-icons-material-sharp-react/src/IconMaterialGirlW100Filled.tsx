import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGirlW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GirlW100Filled'

      short_name='Girl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 7.5q-.525 0-.887-.363-.363-.362-.363-.887t.363-.888Q11.475 5 12 5t.887.362q.363.363.363.888t-.363.887Q12.525 7.5 12 7.5Zm-1.15 11.15V14.9H9.225l1.95-5.725q.1-.275.325-.425.225-.15.5-.15t.5.15q.225.15.325.425l1.95 5.725H13.15v3.75Z"/>
    </Icon>
  );
});

IconMaterialGirlW100Filled.displayName = 'AmauiIconMaterialGirlW100Filled';

export default IconMaterialGirlW100Filled;
