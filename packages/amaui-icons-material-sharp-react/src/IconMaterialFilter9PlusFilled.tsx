import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter9PlusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9PlusFilled'

      short_name='Filter9Plus'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 14h4V6H9v5h3v1h-2Zm2-5h-1V8h1Zm-6 9V2h16v16Zm-4 4V6h2v14h14v2Zm14.5-9h2v-2h2V9h-2V7h-2v2h-2v2h2Z"/>
    </Icon>
  );
});

IconMaterialFilter9PlusFilled.displayName = 'AmauiIconMaterialFilter9PlusFilled';

export default IconMaterialFilter9PlusFilled;
