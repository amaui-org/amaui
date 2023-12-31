import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCardsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CardsW100Filled'

      short_name='Cards'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-520v-160h160v160H280Zm0 240v-160h160v160H280Zm240-240v-160h160v160H520Zm0 240v-160h160v160H520ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Z"/>
    </Icon>
  );
});

IconMaterialCardsW100Filled.displayName = 'AmauiIconMaterialCardsW100Filled';

export default IconMaterialCardsW100Filled;
