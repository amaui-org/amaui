import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDraftOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftOutlinedW100'
      short_name='Draft'

      {...props}
    >
      <path d="M6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H14.65L18.7 7.35V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7ZM6.8 20H17.2Q17.5 20 17.75 19.75Q18 19.5 18 19.2V7.7H14.3V4H6.8Q6.5 4 6.25 4.25Q6 4.5 6 4.8V19.2Q6 19.5 6.25 19.75Q6.5 20 6.8 20ZM6 20Q6 20 6 19.75Q6 19.5 6 19.2V7.7V4Q6 4 6 4.25Q6 4.5 6 4.8V19.2Q6 19.5 6 19.75Q6 20 6 20Z"/>
    </Icon>
  )
});

export default IconMaterialDraftOutlinedW100;
