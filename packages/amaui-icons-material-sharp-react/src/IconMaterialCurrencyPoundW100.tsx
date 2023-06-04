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
      <path d="M6.725 19.7v-.975q.625-.425 1.113-.888.487-.462.812-.962.325-.5.5-1.038.175-.537.175-1.087 0-.425-.037-.763-.038-.337-.163-.687h-2.4v-.7H8.6q-.875-.925-1.375-1.9-.5-.975-.5-2.05 0-2.025 1.413-3.438Q9.55 3.8 11.575 3.8q1.4 0 2.513.687 1.112.688 1.737 1.813l-.65.275q-.55-.95-1.487-1.513-.938-.562-2.113-.562-1.725 0-2.937 1.213Q7.425 6.925 7.425 8.65q0 1.05.55 1.975t1.6 1.975h3.85v.7h-3.55q.075.325.113.675.037.35.037.775 0 1.275-.687 2.375Q8.65 18.225 7.55 19h6.525q1.05 0 1.675-.425t.95-1.175l.6.3q-.375.925-1.25 1.463-.875.537-1.975.537Z"/>
    </Icon>
  );
});

IconMaterialCurrencyPoundW100.displayName = 'AmauiIconMaterialCurrencyPoundW100';

export default IconMaterialCurrencyPoundW100;
