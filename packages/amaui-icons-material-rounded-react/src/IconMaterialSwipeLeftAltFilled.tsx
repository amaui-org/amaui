import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwipeLeftAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwipeLeftAltFilled'

      short_name='SwipeLeftAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 17q-1.825 0-3.188-1.137Q10.45 14.725 10.1 13H5.825l.9.9q.275.275.275.687 0 .413-.3.713-.275.275-.7.275-.425 0-.7-.275l-2.6-2.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l2.6-2.6q.275-.275.688-.275.412 0 .712.275.3.3.3.712 0 .413-.3.713L5.825 11H10.1q.35-1.725 1.712-2.863Q13.175 7 15 7q2.075 0 3.538 1.462Q20 9.925 20 12q0 2.075-1.462 3.537Q17.075 17 15 17Z"/>
    </Icon>
  );
});

IconMaterialSwipeLeftAltFilled.displayName = 'AmauiIconMaterialSwipeLeftAltFilled';

export default IconMaterialSwipeLeftAltFilled;
