import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowDownwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardW100'

      short_name='ArrowDownward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 19-7-7 .5-.5 6.15 6.15V5h.7v12.65l6.15-6.15.5.5Z"/>
    </Icon>
  );
});

IconMaterialArrowDownwardW100.displayName = 'AmauiIconMaterialArrowDownwardW100';

export default IconMaterialArrowDownwardW100;
