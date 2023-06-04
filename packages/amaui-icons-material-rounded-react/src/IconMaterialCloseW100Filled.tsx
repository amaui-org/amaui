import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseW100Filled'

      short_name='Close'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 12.5-5.35 5.35q-.1.1-.237.112-.138.013-.263-.112t-.125-.25q0-.125.125-.25L11.5 12 6.15 6.65q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125L12 11.5l5.35-5.35q.1-.1.237-.113.138-.012.263.113t.125.25q0 .125-.125.25L12.5 12l5.35 5.35q.1.1.112.237.013.138-.112.263t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialCloseW100Filled.displayName = 'AmauiIconMaterialCloseW100Filled';

export default IconMaterialCloseW100Filled;
