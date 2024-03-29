import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookOnlineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookOnlineFilled'

      short_name='BookOnline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16q-.425 0-.712-.288Q8 15.425 8 15v-2q.425 0 .713-.288Q9 12.425 9 12t-.287-.713Q8.425 11 8 11V9q0-.425.288-.713Q8.575 8 9 8h6q.425 0 .713.287Q16 8.575 16 9v2q-.425 0-.712.287Q15 11.575 15 12t.288.712Q15.575 13 16 13v2q0 .425-.287.712Q15.425 16 15 16Zm3-5.5q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Zm0 2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Zm0 2q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM5 23V1h14v22Zm2-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialBookOnlineFilled.displayName = 'AmauiIconMaterialBookOnlineFilled';

export default IconMaterialBookOnlineFilled;
