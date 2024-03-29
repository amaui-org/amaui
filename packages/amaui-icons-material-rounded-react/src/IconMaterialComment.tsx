import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialComment = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Comment'

      short_name='Comment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 14h10q.425 0 .712-.288Q18 13.425 18 13t-.288-.713Q17.425 12 17 12H7q-.425 0-.713.287Q6 12.575 6 13t.287.712Q6.575 14 7 14Zm0-3h10q.425 0 .712-.288Q18 10.425 18 10t-.288-.713Q17.425 9 17 9H7q-.425 0-.713.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Zm0-3h10q.425 0 .712-.287Q18 7.425 18 7t-.288-.713Q17.425 6 17 6H7q-.425 0-.713.287Q6 6.575 6 7t.287.713Q6.575 8 7 8Zm13.3 12.3L18 18H4q-.825 0-1.412-.587Q2 16.825 2 16V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v15.575q0 .675-.612.937-.613.263-1.088-.212ZM4 4v12h14.825L20 17.175V4H4Zm0 0v13.175V4Z"/>
    </Icon>
  );
});

IconMaterialComment.displayName = 'AmauiIconMaterialComment';

export default IconMaterialComment;
