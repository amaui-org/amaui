import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTonalityFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TonalityFilled'

      short_name='Tonality'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm-1-2.05V4.05q-3.025.375-5.012 2.65Q4 8.975 4 12t1.988 5.3Q7.975 19.575 11 19.95Zm2 0q.75-.125 1.475-.338Q15.2 19.4 15.85 19H13ZM13 17h5.25q.2-.225.35-.475.15-.25.3-.525H13Zm0-3h6.75l.1-.5.1-.5H13Zm0-3h6.95l-.1-.5-.1-.5H13Zm0-3h5.9q-.15-.275-.3-.525T18.25 7H13Zm0-3h2.85q-.65-.4-1.375-.613Q13.75 4.175 13 4.05Z"/>
    </Icon>
  );
});

IconMaterialTonalityFilled.displayName = 'AmauiIconMaterialTonalityFilled';

export default IconMaterialTonalityFilled;
