import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAbcFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AbcFilled'

      short_name='Abc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 15V9h5v2h-1.5v-.5h-2v3h2V13H21v2Zm-6.5 0V9h4q.425 0 .713.287.287.288.287.713v1q0 .425-.287.712-.288.288-.713.288.425 0 .713.287.287.288.287.713v1q0 .425-.287.712-.288.288-.713.288Zm1.5-3.75h2v-.75h-2Zm0 2.25h2v-.75h-2ZM3 15V9h5v6H6.5v-1.5h-2V15Zm1.5-3h2v-1.5h-2Z"/>
    </Icon>
  );
});

IconMaterialAbcFilled.displayName = 'AmauiIconMaterialAbcFilled';

export default IconMaterialAbcFilled;
