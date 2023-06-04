import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmbShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmbShareW100Filled'

      short_name='SmbShare'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M449 600h185q17.194 0 29.097-11.864 11.903-11.863 11.903-29Q675 542 663.097 529.5T634 517h-28l-4-25q-3-25-22.29-42.5-19.289-17.5-45.813-17.5Q513 432 497 443t-25 29l-8 16-19 1q-22 2-37 17t-15 38q0 23 16.5 39.5T449 600ZM92 872V444h28v400h630v28H92Zm108-108V228h280l40 40h348v496H200Z"/>
    </Icon>
  );
});

IconMaterialSmbShareW100Filled.displayName = 'AmauiIconMaterialSmbShareW100Filled';

export default IconMaterialSmbShareW100Filled;
