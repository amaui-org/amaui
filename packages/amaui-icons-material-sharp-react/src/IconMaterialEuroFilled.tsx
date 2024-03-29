import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEuroFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroFilled'

      short_name='Euro'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 21q-2.95 0-5.25-1.675T6.5 15H3v-2h3.05q-.075-.6-.062-1.113Q6 11.375 6.05 11H3V9h3.5q.95-2.65 3.25-4.325Q12.05 3 15 3q1.725 0 3.263.612Q19.8 4.225 21 5.3l-1.425 1.4q-.925-.8-2.087-1.25Q16.325 5 15 5q-2.125 0-3.8 1.112Q9.525 7.225 8.675 9H15v2H8.075q-.1.675-.075 1.188.025.512.075.812H15v2H8.675q.85 1.775 2.525 2.887Q12.875 19 15 19q1.325 0 2.488-.45 1.162-.45 2.087-1.25L21 18.7q-1.2 1.075-2.737 1.687Q16.725 21 15 21Z"/>
    </Icon>
  );
});

IconMaterialEuroFilled.displayName = 'AmauiIconMaterialEuroFilled';

export default IconMaterialEuroFilled;
