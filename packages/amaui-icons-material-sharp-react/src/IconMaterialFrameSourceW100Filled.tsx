import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrameSourceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrameSourceW100Filled'

      short_name='FrameSource'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 884V696h28v160h160v28H172Zm428 0v-28h160V696h28v188H600ZM344 683 237 576l107-107 19 20-87 87 87 87-19 20Zm272 0-19-20 87-87-87-87 19-20 107 107-107 107ZM172 456V268h188v28H200v160h-28Zm588 0V296H600v-28h188v188h-28Z"/>
    </Icon>
  );
});

IconMaterialFrameSourceW100Filled.displayName = 'AmauiIconMaterialFrameSourceW100Filled';

export default IconMaterialFrameSourceW100Filled;
