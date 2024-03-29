import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompareArrows = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareArrows'

      short_name='CompareArrows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.3 13.3-3.6-3.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l3.6-3.6q.3-.3.7-.3.4 0 .7.3.3.3.3.712 0 .413-.3.713L14.825 8H21q.425 0 .712.287Q22 8.575 22 9t-.288.712Q21.425 10 21 10h-6.175l1.875 1.875q.3.3.3.7 0 .4-.3.7-.3.3-.687.325-.388.025-.713-.3Zm-8 5.975q.3.3.7.312.4.013.7-.287l3.6-3.6q.15-.15.213-.325.062-.175.062-.375t-.062-.375q-.063-.175-.213-.325l-3.6-3.6q-.3-.3-.7-.3-.4 0-.7.3-.3.3-.3.712 0 .413.3.713L9.175 14H3q-.425 0-.712.287Q2 14.575 2 15t.288.712Q2.575 16 3 16h6.175L7.3 17.875q-.3.3-.3.7 0 .4.3.7Z"/>
    </Icon>
  );
});

IconMaterialCompareArrows.displayName = 'AmauiIconMaterialCompareArrows';

export default IconMaterialCompareArrows;
