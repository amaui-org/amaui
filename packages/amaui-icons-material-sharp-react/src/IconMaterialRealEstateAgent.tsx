import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRealEstateAgent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RealEstateAgent'

      short_name='RealEstateAgent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 14V7.5L14 4 9 7.5V9H7V6.5l7-5 7 5V14Zm-5 8.5-7-1.95V22H1V11h7.95L17 14v2h5v4ZM3 20h2v-7H3Zm10.95.4 5.95-1.85V18h-7.075L9.7 16.95l.6-1.9 2.925.95H15v-.65L8.6 13H7v5.5ZM14 4Zm.5 4h1V7h-1Zm-2 0h1V7h-1Zm2 2h1V9h-1Zm-2 0h1V9h-1Z"/>
    </Icon>
  );
});

IconMaterialRealEstateAgent.displayName = 'AmauiIconMaterialRealEstateAgent';

export default IconMaterialRealEstateAgent;
