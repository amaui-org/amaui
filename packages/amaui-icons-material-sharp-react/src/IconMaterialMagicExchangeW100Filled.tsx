import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagicExchangeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagicExchangeW100Filled'

      short_name='MagicExchange'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 964q-125 0-222.5-69T115 709v139H87V660h188v28H138q36 112 131 180t211 68q71 0 133.5-25T724 841.5q48-44.5 78.5-106T839 602h28q-5 76-37.5 142t-84 115q-51.5 49-120 77T480 964ZM93 550q7-81 40.5-147.5t86-114.5Q272 240 339 214t141-26q122 0 222.5 69.5T845 447V304h28v188H685v-28h137q-33-108-128.5-178T480 216q-67 0-129 24t-111 67.5q-49 43.5-81 105T121 550H93Zm387 163-42-95-95-42 95-43 42-94 43 94 94 43-94 42-43 95Z"/>
    </Icon>
  );
});

IconMaterialMagicExchangeW100Filled.displayName = 'AmauiIconMaterialMagicExchangeW100Filled';

export default IconMaterialMagicExchangeW100Filled;
