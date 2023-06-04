import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileOpenW100Filled'

      short_name='FileOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.7 21.2-3.35-3.35v2.825q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V17.4q0-.325.213-.538.212-.212.537-.212h3.275q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.85l3.375 3.375q.1.1.1.237 0 .138-.1.238-.1.125-.25.112-.15-.012-.25-.112ZM15.05 7.7H18L14.3 4v2.95q0 .325.213.537.212.213.537.213Zm-8.25 13q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h7.55q.125 0 .263.05.137.05.237.15l3.65 3.65q.1.1.15.237.05.138.05.263v7h-1.55q-.625 0-1.062.438-.438.437-.438 1.062v4.55Z"/>
    </Icon>
  );
});

IconMaterialFileOpenW100Filled.displayName = 'AmauiIconMaterialFileOpenW100Filled';

export default IconMaterialFileOpenW100Filled;
