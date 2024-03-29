import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddFilled'

      short_name='BookmarkAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 9q-.425 0-.712-.288Q17 8.425 17 8V7h-1q-.425 0-.712-.287Q15 6.425 15 6t.288-.713Q15.575 5 16 5h1V4q0-.425.288-.713Q17.575 3 18 3t.712.287Q19 3.575 19 4v1h1q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7h-1v1q0 .425-.288.712Q18.425 9 18 9ZM6.4 20.4q-.5.2-.95-.088-.45-.287-.45-.837V5q0-.825.588-1.413Q6.175 3 7 3h7q-.5.75-.75 1.438Q13 5.125 13 6q0 1.8 1.137 3.175Q15.275 10.55 17 10.9q.575.075 1 .075.425 0 1-.075v8.575q0 .55-.45.837-.45.288-.95.088L12 18Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddFilled.displayName = 'AmauiIconMaterialBookmarkAddFilled';

export default IconMaterialBookmarkAddFilled;
