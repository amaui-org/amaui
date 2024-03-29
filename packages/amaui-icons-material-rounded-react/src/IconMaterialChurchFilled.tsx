import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChurchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChurchFilled'

      short_name='Church'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20v-4.7q0-.6.325-1.088.325-.487.875-.737l2.8-1.25v-2q0-.575.3-1.037.3-.463.8-.738L11 6.5V5h-1q-.425 0-.712-.288Q9 4.425 9 4t.288-.713Q9.575 3 10 3h1V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v1h1q.425 0 .713.287Q15 3.575 15 4t-.287.712Q14.425 5 14 5h-1v1.5l3.9 1.95q.5.275.8.738.3.462.3 1.037v2l2.8 1.25q.55.25.875.737Q22 14.7 22 15.3V20q0 .825-.587 1.413Q20.825 22 20 22h-6v-3q0-.825-.587-1.413Q12.825 17 12 17q-.825 0-1.412.587Q10 18.175 10 19v3Zm8-8.5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 10.5 12 10.5t-1.062.438Q10.5 11.375 10.5 12t.438 1.062q.437.438 1.062.438Z"/>
    </Icon>
  );
});

IconMaterialChurchFilled.displayName = 'AmauiIconMaterialChurchFilled';

export default IconMaterialChurchFilled;
