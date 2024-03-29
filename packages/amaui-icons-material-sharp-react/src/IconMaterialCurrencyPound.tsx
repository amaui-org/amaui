import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyPound = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyPound'

      short_name='CurrencyPound'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21v-2l.412-.25q.413-.25.9-.738.488-.487.888-1.25Q8.6 16 8.6 15q0-.275-.038-.525-.037-.25-.087-.475H6v-2h1.5q-.525-.825-1.012-1.738Q6 9.35 6 8q0-2.3 1.6-3.9t3.9-1.6q1.775 0 3.15.975T16.625 6l-1.85.775q-.375-1-1.263-1.638Q12.625 4.5 11.5 4.5q-1.45 0-2.475 1.025Q8 6.55 8 8q0 1.2.6 2t1.225 2H14v2h-3.475q.05.225.063.475.012.25.012.525 0 1.25-.437 2.25-.438 1-1.063 1.75H14q1 0 1.525-.525.525-.525.725-1.35L18 18q-.275 1.375-1.412 2.188Q15.45 21 14 21Z"/>
    </Icon>
  );
});

IconMaterialCurrencyPound.displayName = 'AmauiIconMaterialCurrencyPound';

export default IconMaterialCurrencyPound;
