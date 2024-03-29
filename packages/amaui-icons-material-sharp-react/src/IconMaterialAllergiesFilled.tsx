import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllergiesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllergiesFilled'

      short_name='Allergies'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm-4.9-8.55 1.8-.9-2-4-1.8.9ZM9.5 18h2v-7.225L9.4 6.55l-1.8.9 1.9 3.8Zm3 0h2v-6.775l1.9-3.775-1.8-.9-2.1 4.2Zm4.4-4.55 2-4-1.8-.9-2 4Z"/>
    </Icon>
  );
});

IconMaterialAllergiesFilled.displayName = 'AmauiIconMaterialAllergiesFilled';

export default IconMaterialAllergiesFilled;
