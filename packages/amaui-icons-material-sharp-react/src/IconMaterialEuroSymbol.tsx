import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEuroSymbol = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EuroSymbol'

      short_name='EuroSymbol'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 21q-2.95 0-5.25-1.675T6.5 15H3v-2h3.05Q6 12.725 6 12.5v-1q0-.225.05-.5H3V9h3.5q.95-2.65 3.25-4.325Q12.05 3 15 3q1.725 0 3.263.6Q19.8 4.2 21 5.3l-1.75 1.75q-.875-.725-1.962-1.138Q16.2 5.5 15 5.5q-1.875 0-3.412.963Q10.05 7.425 9.25 9H15v2H8.6q-.05.275-.075.5-.025.225-.025.5t.025.5q.025.225.075.5H15v2H9.25q.8 1.575 2.338 2.538 1.537.962 3.412.962 1.2 0 2.312-.413 1.113-.412 1.938-1.137L21 18.7q-1.2 1.1-2.737 1.7-1.538.6-3.263.6Z"/>
    </Icon>
  );
});

IconMaterialEuroSymbol.displayName = 'AmauiIconMaterialEuroSymbol';

export default IconMaterialEuroSymbol;
