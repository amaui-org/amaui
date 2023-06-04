import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatW100'

      short_name='Nat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.375 14.35q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663.687-.687 1.662-.687.875 0 1.537.562.663.563.813 1.438h3.8v.7h-3.8q-.15.875-.813 1.437-.662.563-1.537.563Zm0-.7q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.163-.488-.487-1.163-.487t-1.162.487q-.488.488-.488 1.163t.488 1.162q.487.488 1.162.488Zm1.15 7.05V20q3.4 0 5.7-2.262 2.3-2.263 2.3-5.738 0-3.475-2.3-5.738Q8.925 4 5.525 4v-.7q3.725 0 6.175 2.462 2.45 2.463 2.525 5.888h6.4l-2.25-2.25.5-.5 3.1 3.1-3.1 3.1-.5-.5 2.25-2.25h-6.4q-.075 3.425-2.525 5.888Q9.25 20.7 5.525 20.7Z"/>
    </Icon>
  );
});

IconMaterialNatW100.displayName = 'AmauiIconMaterialNatW100';

export default IconMaterialNatW100;
