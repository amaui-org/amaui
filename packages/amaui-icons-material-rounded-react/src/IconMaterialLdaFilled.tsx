import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLdaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LdaFilled'

      short_name='Lda'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11 18.575-4.775-2q-.575-.225-.9-.737Q5 15.325 5 14.725V13q0-.825.588-1.413Q6.175 11 7 11h4V8h-1q-.825 0-1.412-.588Q8 6.825 8 6V4q0-.825.588-1.413Q9.175 2 10 2h4q.825 0 1.413.587Q16 3.175 16 4v2q0 .825-.587 1.412Q14.825 8 14 8h-1v3h4q.825 0 1.413.587Q19 12.175 19 13v1.725q0 .6-.325 1.113-.325.512-.9.737l-4.775 2V21q0 .425-.287.712Q12.425 22 12 22t-.712-.288Q11 21.425 11 21Zm0-2.175V13H7v1.725Zm2 0 4-1.675V13h-4Z"/>
    </Icon>
  );
});

IconMaterialLdaFilled.displayName = 'AmauiIconMaterialLdaFilled';

export default IconMaterialLdaFilled;
