import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowTopRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowTopRightW100'

      short_name='ArrowTopRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M226 870V442h483L541 272l19-19 203 203-203 203-19-20 169-169H254v400h-28Z"/>
    </Icon>
  );
});

IconMaterialArrowTopRightW100.displayName = 'AmauiIconMaterialArrowTopRightW100';

export default IconMaterialArrowTopRightW100;
