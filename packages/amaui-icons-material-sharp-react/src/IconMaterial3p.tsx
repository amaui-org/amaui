import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3p = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3p'

      short_name='3p'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 14h8v-.55q0-1.1-1.1-1.775Q13.8 11 12 11q-1.8 0-2.9.675Q8 12.35 8 13.45Zm4-4q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10ZM2 22V2h20v16H6Zm2-4.825L5.175 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterial3p.displayName = 'AmauiIconMaterial3p';

export default IconMaterial3p;
