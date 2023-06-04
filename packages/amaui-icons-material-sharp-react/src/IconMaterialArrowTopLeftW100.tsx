import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowTopLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowTopLeftW100'

      short_name='ArrowTopLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M706 870V470H250l169 169-19 20-203-203 203-203 19 19-168 170h483v428h-28Z"/>
    </Icon>
  );
});

IconMaterialArrowTopLeftW100.displayName = 'AmauiIconMaterialArrowTopLeftW100';

export default IconMaterialArrowTopLeftW100;
