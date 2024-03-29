import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatch = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Watch'

      short_name='Watch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 22q-.65 0-1.188-.387-.537-.388-.737-1.038L7.65 17.45q-1.2-.95-1.925-2.375Q5 13.65 5 12q0-1.65.725-3.075Q6.45 7.5 7.65 6.55l.925-3.125q.2-.65.737-1.038Q9.85 2 10.5 2h3q.65 0 1.188.387.537.388.737 1.038l.925 3.125q1.2.95 1.925 2.375Q19 10.35 19 12q0 1.65-.725 3.075-.725 1.425-1.925 2.375l-.925 3.125q-.2.65-.737 1.038Q14.15 22 13.5 22Zm1.5-5q2.075 0 3.538-1.463Q17 14.075 17 12t-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12q0 2.075 1.463 3.537Q9.925 17 12 17ZM10.1 5.25q.975-.275 1.9-.275.925 0 1.9.275L13.5 4h-3ZM10.5 20h3l.4-1.25q-.975.275-1.9.275-.925 0-1.9-.275Zm-.4-16h3.8-3.8Zm.4 16h-.4 3.8-.4Z"/>
    </Icon>
  );
});

IconMaterialWatch.displayName = 'AmauiIconMaterialWatch';

export default IconMaterialWatch;
