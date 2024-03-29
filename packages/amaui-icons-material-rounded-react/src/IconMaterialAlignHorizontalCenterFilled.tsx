import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalCenterFilled'

      short_name='AlignHorizontalCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.425 0-.712-.288Q11 21.425 11 21v-4H7.5q-.625 0-1.062-.438Q6 16.125 6 15.5t.438-1.062Q6.875 14 7.5 14H11v-4H4.5q-.625 0-1.062-.438Q3 9.125 3 8.5t.438-1.062Q3.875 7 4.5 7H11V3q0-.425.288-.713Q11.575 2 12 2t.713.287Q13 2.575 13 3v4h6.5q.625 0 1.062.438Q21 7.875 21 8.5t-.438 1.062Q20.125 10 19.5 10H13v4h3.5q.625 0 1.062.438.438.437.438 1.062t-.438 1.062Q17.125 17 16.5 17H13v4q0 .425-.287.712Q12.425 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalCenterFilled.displayName = 'AmauiIconMaterialAlignHorizontalCenterFilled';

export default IconMaterialAlignHorizontalCenterFilled;
