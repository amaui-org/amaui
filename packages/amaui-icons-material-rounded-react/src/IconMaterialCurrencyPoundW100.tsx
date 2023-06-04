import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyPoundW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyPoundW100'

      short_name='CurrencyPound'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.225 19.7q-.225 0-.4-.175-.175-.175-.175-.4 0-.175.1-.35t.225-.275q1.125-.8 1.7-1.75t.575-2q0-.425-.037-.763-.038-.337-.163-.687H7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.525q-.875-.925-1.375-1.9-.5-.975-.5-2.05 0-2.025 1.412-3.438Q9.475 3.8 11.5 3.8q1.3 0 2.35.587 1.05.588 1.7 1.588.075.125.038.275-.038.15-.188.2-.125.05-.263.013-.137-.038-.212-.163-.575-.825-1.462-1.313Q12.575 4.5 11.5 4.5q-1.725 0-2.938 1.213Q7.35 6.925 7.35 8.65q0 1.05.55 1.975T9.5 12.6H13q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H9.8q.075.325.113.675.037.35.037.775 0 1.275-.687 2.375-.688 1.1-1.788 1.875H14q.925 0 1.525-.337.6-.338.95-.963.075-.125.2-.162.125-.038.25.012t.162.188q.038.137-.012.262-.425.8-1.25 1.25Q15 19.7 14 19.7Z"/>
    </Icon>
  );
});

IconMaterialCurrencyPoundW100.displayName = 'AmauiIconMaterialCurrencyPoundW100';

export default IconMaterialCurrencyPoundW100;
