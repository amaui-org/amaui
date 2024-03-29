import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEcoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcoFilled'

      short_name='Eco'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.25 22q-.825 0-1.662-.188-.838-.187-1.713-.537.3-3.025 1.75-5.65Q11.075 13 13.35 11q-2.75 1.4-4.762 3.7-2.013 2.3-2.813 5.25-.1-.075-.187-.162L5.4 19.6q-1.175-1.175-1.787-2.625Q3 15.525 3 13.95q0-1.7.675-3.25T5.55 7.95q2.025-2.025 5.25-2.638 3.225-.612 9.05-.112.45 6.025-.15 9.137-.6 3.113-2.6 5.113-1.225 1.225-2.737 1.887Q12.85 22 11.25 22Z"/>
    </Icon>
  );
});

IconMaterialEcoFilled.displayName = 'AmauiIconMaterialEcoFilled';

export default IconMaterialEcoFilled;
