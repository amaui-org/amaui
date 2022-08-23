import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkAddedRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddedRounded'
      short_name='BookmarkAdded'

      {...props}
    >
      <path d="M17.825 8.575Q17.625 8.575 17.45 8.512Q17.275 8.45 17.125 8.3L15.7 6.875Q15.4 6.575 15.4 6.162Q15.4 5.75 15.7 5.475Q15.975 5.175 16.4 5.175Q16.825 5.175 17.1 5.45L17.825 6.175L20.65 3.325Q20.95 3.025 21.35 3.025Q21.75 3.025 22.075 3.325Q22.35 3.625 22.35 4.05Q22.35 4.475 22.075 4.75L18.525 8.3Q18.375 8.45 18.2 8.512Q18.025 8.575 17.825 8.575ZM6.4 20.4Q5.9 20.6 5.45 20.312Q5 20.025 5 19.475V5Q5 4.175 5.588 3.587Q6.175 3 7 3H13Q13 3.575 13 4Q13 4.425 13 5H7Q7 5 7 5Q7 5 7 5V17.95L12 15.8L17 17.95V11Q17.575 11 18 11Q18.425 11 19 11V19.475Q19 20.025 18.55 20.312Q18.1 20.6 17.6 20.4L12 18ZM7 5Q7 5 7 5Q7 5 7 5H13Q13 5 13 5Q13 5 13 5Q13 5 13 5Q13 5 13 5H12Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddedRounded.displayName = 'AmauiIconMaterialBookmarkAddedRounded';

export default IconMaterialBookmarkAddedRounded;
