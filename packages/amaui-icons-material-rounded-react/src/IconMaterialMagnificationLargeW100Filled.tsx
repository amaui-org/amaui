import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnificationLargeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationLargeW100Filled'

      short_name='MagnificationLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 14.35h9.2q.325 0 .538-.213.212-.212.212-.537V8.4q0-.325-.212-.538-.213-.212-.538-.212H6.4q-.325 0-.537.212-.213.213-.213.538v5.2q0 .325.213.537.212.213.537.213ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialMagnificationLargeW100Filled.displayName = 'AmauiIconMaterialMagnificationLargeW100Filled';

export default IconMaterialMagnificationLargeW100Filled;
