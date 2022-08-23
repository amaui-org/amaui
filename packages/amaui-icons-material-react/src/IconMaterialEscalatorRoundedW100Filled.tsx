import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEscalatorRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorRoundedW100Filled'
      short_name='Escalator'

      {...props}
    >
      <path d="M7 16.85H9.7L14.7 7.85H17Q17.15 7.85 17.25 7.75Q17.35 7.65 17.35 7.5Q17.35 7.35 17.25 7.25Q17.15 7.15 17 7.15H14.3L9.3 16.15H7Q6.85 16.15 6.75 16.25Q6.65 16.35 6.65 16.5Q6.65 16.65 6.75 16.75Q6.85 16.85 7 16.85ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialEscalatorRoundedW100Filled.displayName = 'AmauiIconMaterialEscalatorRoundedW100Filled';

export default IconMaterialEscalatorRoundedW100Filled;
