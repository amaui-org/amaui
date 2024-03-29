import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSleddingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleddingFilled'

      short_name='Sledding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 6.5q-.825 0-1.412-.588Q10 5.325 10 4.5t.588-1.413Q11.175 2.5 12 2.5t1.413.587Q14 3.675 14 4.5q0 .825-.587 1.412Q12.825 6.5 12 6.5ZM19.125 23q-.475 0-.787-.05-.313-.05-.588-.15L1 17.35l.45-1.425L5.4 17.2l.45-1.425L1.925 14.5l.475-1.425L4 13.6V9.5l5.475-2.35q.2-.1.388-.125Q10.05 7 10.275 7q.85 0 1.375.737.525.738.25 1.613l-1.05 3.25 3.65-.6 2.725 5.9 1.925.625-.45 1.425-3.325-1.075L14.9 20.3l3.325 1.075q.2.05.413.087.212.038.487.038.9 0 1.638-.738.737-.737.737-1.637 0-.85-.413-1.5-.412-.65-1.337-1l.475-1.425q1.3.425 2.038 1.475.737 1.05.737 2.45 0 1.55-1.163 2.712Q20.675 23 19.125 23ZM7 14.575 7.925 10 6 10.825v3.425Zm6.475 5.275.475-1.45-6.675-2.15-.45 1.425Zm1.15-2.8L13.45 14.5l-3.975.875Z"/>
    </Icon>
  );
});

IconMaterialSleddingFilled.displayName = 'AmauiIconMaterialSleddingFilled';

export default IconMaterialSleddingFilled;
