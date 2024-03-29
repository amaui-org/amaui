import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEscalatorWarning = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorWarning'

      short_name='EscalatorWarning'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 6q-.825 0-1.412-.588Q4.5 4.825 4.5 4t.588-1.413Q5.675 2 6.5 2t1.412.587Q8.5 3.175 8.5 4q0 .825-.588 1.412Q7.325 6 6.5 6ZM17 11q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062Q16.375 8 17 8t1.062.438q.438.437.438 1.062t-.438 1.062Q17.625 11 17 11ZM5.5 22q-.425 0-.713-.288Q4.5 21.425 4.5 21v-6H4q-.425 0-.712-.288Q3 14.425 3 14V9q0-.825.587-1.413Q4.175 7 5 7h3q.55 0 1 .262.45.263.725.738l3.575 6.175 1.025-1.525q.2-.3.538-.475.337-.175.712-.175H18.5q.625 0 1.062.438.438.437.438 1.062V16q0 .425-.288.712Q19.425 17 19 17v4q0 .425-.288.712Q18.425 22 18 22h-2q-.425 0-.712-.288Q15 21.425 15 21v-6.1l-.475.675q-.15.2-.362.312Q13.95 16 13.7 16h-1.1q-.275 0-.512-.137-.238-.138-.363-.363L9.5 11.6V21q0 .425-.287.712Q8.925 22 8.5 22Z"/>
    </Icon>
  );
});

IconMaterialEscalatorWarning.displayName = 'AmauiIconMaterialEscalatorWarning';

export default IconMaterialEscalatorWarning;
