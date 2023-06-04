import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDropUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropUp'

      short_name='ArrowDropUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7 14 5-5 5 5Z"/>
    </Icon>
  );
});

IconMaterialArrowDropUp.displayName = 'AmauiIconMaterialArrowDropUp';

export default IconMaterialArrowDropUp;
