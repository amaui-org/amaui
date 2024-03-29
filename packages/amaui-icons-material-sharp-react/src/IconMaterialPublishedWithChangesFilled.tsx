import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPublishedWithChangesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishedWithChangesFilled'

      short_name='PublishedWithChanges'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21.95q-1.9-.2-3.537-1.037-1.638-.838-2.85-2.176Q3.4 17.4 2.7 15.675 2 13.95 2 12q0-2.275.913-4.2.912-1.925 2.487-3.3H3v-2h6v6H7V5.775q-1.375 1.1-2.188 2.713Q4 10.1 4 12q0 3.075 2.013 5.312Q8.025 19.55 11 19.925Zm-.425-5.35L6.35 12.35l1.4-1.4 2.825 2.825L16.25 8.1l1.4 1.425ZM15 21.5v-6h2v2.725q1.375-1.125 2.188-2.725Q20 13.9 20 12q0-3.075-2.012-5.313Q15.975 4.45 13 4.075V2.05q3.8.375 6.4 3.2Q22 8.075 22 12q0 2.275-.913 4.2-.912 1.925-2.487 3.3H21v2Z"/>
    </Icon>
  );
});

IconMaterialPublishedWithChangesFilled.displayName = 'AmauiIconMaterialPublishedWithChangesFilled';

export default IconMaterialPublishedWithChangesFilled;
