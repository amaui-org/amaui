import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStorefrontW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StorefrontW100Filled'

      short_name='Storefront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35V10.8q-.65-.45-.937-1.187-.288-.738-.013-1.563l.95-3.15q.2-.6.625-.925Q4.7 3.65 5.35 3.65H18.6q.65 0 1.075.3.425.3.625.9l1 3.2q.275.825-.012 1.587-.288.763-.938 1.213v9.5Zm10.55-9.7q1.05 0 1.563-.563.512-.562.437-1.137l-.7-4.6h-3.15V8.7q0 .8.55 1.375t1.3.575Zm-4.5 0q.875 0 1.413-.575.537-.575.537-1.375V4.35H8.5l-.7 4.7q-.05.425.45 1.012.5.588 1.45.588Zm-4.45 0q.725 0 1.225-.488.5-.487.625-1.212l.65-4.6h-2.4q-.425 0-.675.187-.25.188-.375.563l-.9 3.1q-.275.875.225 1.662.5.788 1.625.788Zm13.5 0q.95 0 1.55-.738.6-.737.3-1.712l-.95-3.15q-.125-.375-.375-.538-.25-.162-.675-.162h-2.35l.65 4.6q.125.725.625 1.212.5.488 1.225.488Z"/>
    </Icon>
  );
});

IconMaterialStorefrontW100Filled.displayName = 'AmauiIconMaterialStorefrontW100Filled';

export default IconMaterialStorefrontW100Filled;
