import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTibiaAltRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TibiaAltRoundedW100Filled'
      short_name='TibiaAlt'

      {...props}
    >
      <path d="M11.25 22q-.6-1.35-.787-2.763-.188-1.412-.175-2.6.012-1.187.125-2.037.112-.85.112-1.1 0-.15-.037-.275-.038-.125-.213-.15-.05 0-.7-.088-.65-.087-1.612-.387-.963-.3-2.125-.85-1.163-.55-2.263-1.475L8.3 4.1l6.65 3.025q1.275.575 2.012 1.725.738 1.15.738 2.575V22Zm2.4-3.325q.2 0 .363-.1.162-.1.237-.25.1.15.25.25t.35.1q.3 0 .5-.213.2-.212.2-.487 0-.3-.2-.5t-.5-.2h-.25V12.7h.25q.3 0 .5-.213.2-.212.2-.487 0-.3-.2-.5t-.5-.2q-.2 0-.35.087-.15.088-.25.238-.075-.15-.237-.238-.163-.087-.363-.087-.275 0-.487.2-.213.2-.213.5 0 .275.213.487.212.213.487.213h.25v4.575h-.25q-.275 0-.487.2-.213.2-.213.5 0 .275.213.487.212.213.487.213Z"/>
    </Icon>
  );
});

IconMaterialTibiaAltRoundedW100Filled.displayName = 'AmauiIconMaterialTibiaAltRoundedW100Filled';

export default IconMaterialTibiaAltRoundedW100Filled;
