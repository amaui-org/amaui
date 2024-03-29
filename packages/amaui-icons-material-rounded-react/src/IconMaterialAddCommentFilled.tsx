import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddCommentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentFilled'

      short_name='AddComment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q.425 0 .713-.288Q13 13.425 13 13v-2h2q.425 0 .713-.288Q16 10.425 16 10t-.287-.713Q15.425 9 15 9h-2V7q0-.425-.287-.713Q12.425 6 12 6t-.712.287Q11 6.575 11 7v2H9q-.425 0-.712.287Q8 9.575 8 10t.288.712Q8.575 11 9 11h2v2q0 .425.288.712.287.288.712.288ZM2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575Z"/>
    </Icon>
  );
});

IconMaterialAddCommentFilled.displayName = 'AmauiIconMaterialAddCommentFilled';

export default IconMaterialAddCommentFilled;
