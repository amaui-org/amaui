import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllergies = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Allergies'

      short_name='Allergies'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 18h2v-7.25l-2.1-4.2-1.8.9 1.9 3.8Zm3 0h2v-6.75l1.9-3.8-1.8-.9-2.1 4.2Zm4.4-4.55 2-4-1.8-.9-2 4Zm-9.8 0 1.8-.9-2-4-1.8.9ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialAllergies.displayName = 'AmauiIconMaterialAllergies';

export default IconMaterialAllergies;
