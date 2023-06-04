import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFreeCancellationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FreeCancellationW100Filled'

      short_name='FreeCancellation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.525 20.725 13.65 18.85q-.1-.1-.1-.225t.125-.25q.1-.1.225-.1t.25.1l1.875 1.9 4-4q.125-.125.25-.112.125.012.25.112.1.125.1.263 0 .137-.1.237l-3.95 3.95q-.2.2-.525.2t-.525-.2ZM9 14.475 7.625 15.85q-.1.1-.225.1t-.225-.125q-.125-.1-.125-.225t.125-.25L8.525 14 7.15 12.625q-.1-.1-.1-.225t.125-.25q.1-.1.225-.1t.25.1L9 13.525l1.375-1.375q.1-.1.225-.1t.25.1q.1.125.1.25t-.1.225L9.475 14l1.375 1.375q.1.1.1.225t-.1.225q-.125.125-.25.125t-.225-.125ZM5.8 20.7q-.65 0-1.075-.425Q4.3 19.85 4.3 19.2V6.8q0-.65.425-1.075Q5.15 5.3 5.8 5.3h2V3.4q0-.175.113-.288Q8.025 3 8.2 3t.288.112q.112.113.112.288v1.9h6.9V3.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h2q.65 0 1.075.425.425.425.425 1.075v5.525l-.7.725V10.8H5v8.4q0 .35.225.575Q5.45 20 5.8 20h4.725l.75.7Z"/>
    </Icon>
  );
});

IconMaterialFreeCancellationW100Filled.displayName = 'AmauiIconMaterialFreeCancellationW100Filled';

export default IconMaterialFreeCancellationW100Filled;
