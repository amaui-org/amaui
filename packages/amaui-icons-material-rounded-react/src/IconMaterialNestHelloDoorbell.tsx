import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestHelloDoorbell = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestHelloDoorbell'

      short_name='NestHelloDoorbell'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.125 0-3.562-1.438Q7 19.125 7 17V7q0-2.125 1.438-3.562Q9.875 2 12 2t3.562 1.438Q17 4.875 17 7v10q0 2.125-1.438 3.562Q14.125 22 12 22Zm0-2q1.2 0 2.1-.9.9-.9.9-2.1V7q0-1.275-.9-2.138Q13.2 4 12 4q-1.2 0-2.1.862Q9 5.725 9 7v10q0 1.2.9 2.1.9.9 2.1.9Zm0-2q.825 0 1.413-.587Q14 16.825 14 16q0-.825-.587-1.413Q12.825 14 12 14q-.825 0-1.412.587Q10 15.175 10 16q0 .825.588 1.413Q11.175 18 12 18Zm0-1q-.45 0-.725-.312Q11 16.375 11 16q0-.375.275-.688Q11.55 15 12 15q.45 0 .725.275Q13 15.55 13 16q0 .375-.275.688Q12.45 17 12 17Zm0-7q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10Zm0 2Z"/>
    </Icon>
  );
});

IconMaterialNestHelloDoorbell.displayName = 'AmauiIconMaterialNestHelloDoorbell';

export default IconMaterialNestHelloDoorbell;
