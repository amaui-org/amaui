import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnificationSmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationSmallW100Filled'

      short_name='MagnificationSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 10.35h1.2q.325 0 .537-.213.213-.212.213-.537V8.4q0-.325-.213-.538-.212-.212-.537-.212H6.4q-.325 0-.537.212-.213.213-.213.538v1.2q0 .325.213.537.212.213.537.213ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialMagnificationSmallW100Filled.displayName = 'AmauiIconMaterialMagnificationSmallW100Filled';

export default IconMaterialMagnificationSmallW100Filled;
