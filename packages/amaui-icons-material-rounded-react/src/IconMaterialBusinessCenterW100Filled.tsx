import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBusinessCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterW100Filled'

      short_name='BusinessCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 13.65V8.8q0-.65.425-1.075Q4.15 7.3 4.8 7.3h4.5V6.1q0-.65.425-1.075Q10.15 4.6 10.8 4.6h2.4q.65 0 1.075.425.425.425.425 1.075v1.2h4.5q.65 0 1.075.425.425.425.425 1.075v4.85h-7v-.6q0-.325-.212-.538-.213-.212-.538-.212h-1.9q-.325 0-.537.212-.213.213-.213.538v.6ZM10 7.3h4V6.1q0-.3-.25-.55-.25-.25-.55-.25h-2.4q-.3 0-.55.25-.25.25-.25.55Zm1 7.7v-2h2v2Zm-6.2 4.7q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2v-3.85h7v.6q0 .325.213.538.212.212.537.212h1.9q.325 0 .538-.212.212-.213.212-.538v-.6h7v3.85q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterW100Filled.displayName = 'AmauiIconMaterialBusinessCenterW100Filled';

export default IconMaterialBusinessCenterW100Filled;
