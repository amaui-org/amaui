import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkRemoveRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRemoveRounded'
      short_name='BookmarkRemove'

      {...props}
    >
      <path d="M6.4 20.4Q5.9 20.6 5.45 20.312Q5 20.025 5 19.475V5Q5 4.175 5.588 3.587Q6.175 3 7 3H13Q13 3.575 13 4Q13 4.425 13 5H7Q7 5 7 5Q7 5 7 5V17.95L12 15.8L17 17.95V11Q17.575 11 18 11Q18.425 11 19 11V19.475Q19 20.025 18.55 20.312Q18.1 20.6 17.6 20.4L12 18ZM7 5Q7 5 7 5Q7 5 7 5H13Q13 5 13 5Q13 5 13 5Q13 5 13 5Q13 5 13 5H12ZM16 7Q15.575 7 15.288 6.713Q15 6.425 15 6Q15 5.575 15.288 5.287Q15.575 5 16 5H20Q20.425 5 20.712 5.287Q21 5.575 21 6Q21 6.425 20.712 6.713Q20.425 7 20 7Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemoveRounded.displayName = 'AmauiIconMaterialBookmarkRemoveRounded';

export default IconMaterialBookmarkRemoveRounded;
