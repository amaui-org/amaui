import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterFramesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFramesW100Filled'

      short_name='FilterFrames'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.15 21.25q-.65 0-1.075-.425-.425-.425-.425-1.075V6.05q0-.65.425-1.075Q3.5 4.55 4.15 4.55H8.8l2.675-2.675Q11.7 1.65 12 1.65q.3 0 .525.225L15.2 4.55h4.65q.65 0 1.075.425.425.425.425 1.075v13.7q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h15.7q.35 0 .575-.225.225-.225.225-.575V6.05q0-.35-.225-.575-.225-.225-.575-.225H4.15q-.35 0-.575.225-.225.225-.225.575v13.7q0 .35.225.575.225.225.575.225Zm3.25-3.3q-.325 0-.537-.212-.213-.213-.213-.538V9.3q0-.325.213-.538.212-.212.537-.212h9.2q.325 0 .538.212.212.213.212.538v7.2q0 .325-.212.538-.213.212-.538.212Z"/>
    </Icon>
  );
});

IconMaterialFilterFramesW100Filled.displayName = 'AmauiIconMaterialFilterFramesW100Filled';

export default IconMaterialFilterFramesW100Filled;
