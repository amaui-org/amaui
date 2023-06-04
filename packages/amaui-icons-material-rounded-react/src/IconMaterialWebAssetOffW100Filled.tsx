import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebAssetOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetOffW100Filled'

      short_name='WebAssetOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.575 17.775 20 17.2V8h-9.2L8.1 5.3h11.1q.65 0 1.075.425.425.425.425 1.075v10.4q0 .15-.037.3-.038.15-.088.275Zm.475 4.275L17.7 18.7H4.8q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h.5v1L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125ZM4.8 18H17L7 8H4v9.2q0 .35.225.575Q4.45 18 4.8 18Z"/>
    </Icon>
  );
});

IconMaterialWebAssetOffW100Filled.displayName = 'AmauiIconMaterialWebAssetOffW100Filled';

export default IconMaterialWebAssetOffW100Filled;
