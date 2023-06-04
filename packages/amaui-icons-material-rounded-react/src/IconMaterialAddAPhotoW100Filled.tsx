import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddAPhotoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAPhotoW100Filled'

      short_name='AddAPhoto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.475 20.7q-.65 0-1.075-.425-.425-.425-.425-1.075V8.8q0-.65.425-1.075.425-.425 1.075-.425h2.9l1.4-1.525q.2-.225.488-.35.287-.125.612-.125h4.7q.325 0 .538.212.212.213.212.538v1.2q0 .325.213.537.212.213.537.213H16.7v1.6q0 .325.213.537.212.213.537.213h1.225q.35 0 .525.275.175.275.175.475v8.1q0 .65-.425 1.075-.425.425-1.075.425Zm7.2-3.2q1.475 0 2.488-1.012 1.012-1.013 1.012-2.488t-1.012-2.488Q12.15 10.5 10.675 10.5t-2.487 1.012Q7.175 12.525 7.175 14t1.013 2.488Q9.2 17.5 10.675 17.5ZM18.7 6h-1.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H19.4v1.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Z"/>
    </Icon>
  );
});

IconMaterialAddAPhotoW100Filled.displayName = 'AmauiIconMaterialAddAPhotoW100Filled';

export default IconMaterialAddAPhotoW100Filled;
