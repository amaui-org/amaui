import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCollectionsBookmarkRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollectionsBookmarkRoundedFilled'
      short_name='CollectionsBookmark'

      {...props}
    >
      <path d="M13.75 10.55 15.5 9.5 17.25 10.55Q17.5 10.7 17.75 10.55Q18 10.4 18 10.125V4H13V10.125Q13 10.4 13.25 10.55Q13.5 10.7 13.75 10.55ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V7Q2 6.575 2.288 6.287Q2.575 6 3 6Q3.425 6 3.713 6.287Q4 6.575 4 7V20Q4 20 4 20Q4 20 4 20H17Q17.425 20 17.712 20.288Q18 20.575 18 21Q18 21.425 17.712 21.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialCollectionsBookmarkRoundedFilled.displayName = 'AmauiIconMaterialCollectionsBookmarkRoundedFilled';

export default IconMaterialCollectionsBookmarkRoundedFilled;
