import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabMove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabMove'

      short_name='TabMove'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 936q-33 0-56.5-23.5T120 856v-80q0-17 11.5-28.5T160 736q17 0 28.5 11.5T200 776v80h560V376H200v80q0 17-11.5 28.5T160 496q-17 0-28.5-11.5T120 456V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Zm287-280H160q-17 0-28.5-11.5T120 616q0-17 11.5-28.5T160 576h327l-55-56q-11-11-11.5-27.5T432 464q11-11 28-11t28 11l124 124q12 12 12 28t-12 28L488 768q-11 11-27.5 11.5T432 768q-11-11-11-28t11-28l55-56Z"/>
    </Icon>
  );
});

IconMaterialTabMove.displayName = 'AmauiIconMaterialTabMove';

export default IconMaterialTabMove;
