import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialYoutubeActivity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YoutubeActivity'

      short_name='YoutubeActivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.4 17.95q-.675.025-1.287.038Q13.5 18 13.025 18H12q-1.775 0-3.325-.05-1.325-.05-2.613-.138-1.287-.087-1.862-.237-.65-.175-1.125-.65-.475-.475-.65-1.125-.15-.575-.237-1.4-.088-.825-.138-1.575Q2 11.925 2 11q0-.925.05-1.825.05-.75.138-1.575.087-.825.237-1.4.175-.65.65-1.125.475-.475 1.125-.65.575-.15 1.862-.238Q7.35 4.1 8.675 4.05 10.225 4 12 4q1.775 0 3.325.05 1.325.05 2.613.137 1.287.088 1.862.238.65.175 1.125.65.475.475.65 1.125.15.575.237 1.4.088.825.138 1.575.05.9.05 1.825v.425q-.475-.2-.975-.312Q20.525 11 20 11q-2.075 0-3.538 1.462Q15 13.925 15 16q0 .525.1 1.012.1.488.3.938ZM10 14l5.2-3L10 8Zm9 5v-2h-2v-2h2v-2h2v2h2v2h-2v2Z"/>
    </Icon>
  );
});

IconMaterialYoutubeActivity.displayName = 'AmauiIconMaterialYoutubeActivity';

export default IconMaterialYoutubeActivity;
