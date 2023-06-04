import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBackIosNew = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosNew'

      short_name='ArrowBackIosNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 22 6 12 16 2l1.775 1.775L9.55 12l8.225 8.225Z"/>
    </Icon>
  );
});

IconMaterialArrowBackIosNew.displayName = 'AmauiIconMaterialArrowBackIosNew';

export default IconMaterialArrowBackIosNew;
