import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNavigation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Navigation'

      short_name='Navigation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 20.725q-.3.125-.612.063-.313-.063-.538-.288-.225-.225-.287-.538-.063-.312.062-.612l6.8-15.3q.275-.6.925-.6t.925.6l6.8 15.3q.125.3.063.612-.063.313-.288.538-.225.225-.537.288-.313.062-.613-.063L12 18ZM7.1 17.9l4.9-2.1 4.9 2.1-4.9-11Zm4.9-2.1Z"/>
    </Icon>
  );
});

IconMaterialNavigation.displayName = 'AmauiIconMaterialNavigation';

export default IconMaterialNavigation;
