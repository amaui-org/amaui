import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTipsAndUpdatesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TipsAndUpdatesW100'

      short_name='TipsAndUpdates'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m22 9.35-.425-.925L20.65 8l.925-.425L22 6.65l.425.925.925.425-.925.425Zm-3-4.3-.65-1.4-1.4-.65 1.4-.65.65-1.4.65 1.4 1.4.65-1.4.65ZM9 20.9q-.65 0-1.138-.425-.487-.425-.612-1.075h3.5q-.125.65-.613 1.075Q9.65 20.9 9 20.9Zm-3.35-3.5v-.7h6.7v.7Zm0-2.7q-1.325-.9-2.088-2.238Q2.8 11.125 2.8 9.5q0-2.6 1.8-4.4Q6.4 3.3 9 3.3q2.6 0 4.4 1.8 1.8 1.8 1.8 4.4 0 1.625-.762 2.962-.763 1.338-2.088 2.238Zm.2-.7h6.3q1.125-.8 1.737-1.975.613-1.175.613-2.525 0-2.3-1.6-3.9T9 4Q6.7 4 5.1 5.6T3.5 9.5q0 1.35.613 2.525Q4.725 13.2 5.85 14ZM9 14Z"/>
    </Icon>
  );
});

IconMaterialTipsAndUpdatesW100.displayName = 'AmauiIconMaterialTipsAndUpdatesW100';

export default IconMaterialTipsAndUpdatesW100;
