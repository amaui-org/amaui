import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFindReplaceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindReplaceW100Filled'

      short_name='FindReplace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 10q-.175 0-.275-.113-.1-.112-.05-.287.425-1.875 2-3.088Q9.05 5.3 11 5.3q2.225 0 3.388 1.075Q15.55 7.45 16 8.25v-2.6q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.6q0 .325-.212.537-.213.213-.538.213h-3.6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.35q-.425-1.125-1.587-2.213Q12.95 6 11 6 9.275 6 7.925 7.05T6.15 9.725q-.05.125-.137.2Q5.925 10 5.8 10Zm13.55 9.9-4.6-4.6q-.825.725-1.762 1.062-.938.338-1.988.338-1.475 0-2.875-.775T6 13.75v2.6q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-3.6q0-.325.213-.538Q5.725 12 6.05 12h3.6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H6.3q.5 1.425 1.788 2.362Q9.375 16 11 16q1.725 0 3.075-1.05t1.775-2.675q.05-.125.138-.2.087-.075.212-.075.175 0 .275.113.1.112.05.287-.15.725-.463 1.262-.312.538-.812 1.138l4.6 4.6q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialFindReplaceW100Filled.displayName = 'AmauiIconMaterialFindReplaceW100Filled';

export default IconMaterialFindReplaceW100Filled;
