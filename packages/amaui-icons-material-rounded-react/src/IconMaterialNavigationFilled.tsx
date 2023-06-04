import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNavigationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigationFilled'

      short_name='Navigation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.675 20.725q-.3.125-.613.063-.312-.063-.537-.288-.225-.225-.288-.538-.062-.312.063-.612l6.8-15.3q.275-.6.925-.6t.925.6l6.8 15.3q.125.3.062.612-.062.313-.287.538-.225.225-.537.288-.313.062-.613-.063L12.025 18Z"/>
    </Icon>
  );
});

IconMaterialNavigationFilled.displayName = 'AmauiIconMaterialNavigationFilled';

export default IconMaterialNavigationFilled;
