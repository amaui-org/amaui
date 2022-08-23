import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkAddedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddedRoundedFilled'
      short_name='BookmarkAdded'

      {...props}
    >
      <path d="M17.825 8.575Q17.625 8.575 17.45 8.512Q17.275 8.45 17.125 8.3L15.7 6.875Q15.4 6.575 15.4 6.162Q15.4 5.75 15.7 5.475Q15.975 5.175 16.4 5.175Q16.825 5.175 17.1 5.45L17.825 6.175L20.65 3.325Q20.95 3.025 21.35 3.025Q21.75 3.025 22.075 3.325Q22.35 3.625 22.35 4.05Q22.35 4.475 22.075 4.75L18.525 8.3Q18.375 8.45 18.2 8.512Q18.025 8.575 17.825 8.575ZM6.4 20.4Q5.9 20.6 5.45 20.312Q5 20.025 5 19.475V5Q5 4.175 5.588 3.587Q6.175 3 7 3H14Q13.5 3.75 13.25 4.438Q13 5.125 13 6Q13 7.8 14.137 9.175Q15.275 10.55 17 10.9Q17.575 10.975 18 10.975Q18.425 10.975 19 10.9V19.475Q19 20.025 18.55 20.312Q18.1 20.6 17.6 20.4L12 18Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddedRoundedFilled.displayName = 'AmauiIconMaterialBookmarkAddedRoundedFilled';

export default IconMaterialBookmarkAddedRoundedFilled;
