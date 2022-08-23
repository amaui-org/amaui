import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSplitscreenRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenRoundedW100Filled'
      short_name='Splitscreen'

      {...props}
    >
      <path d="M6.8 11Q6.15 11 5.725 10.575Q5.3 10.15 5.3 9.5V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H17.2Q17.85 3.3 18.275 3.725Q18.7 4.15 18.7 4.8V9.5Q18.7 10.15 18.275 10.575Q17.85 11 17.2 11ZM6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V14.5Q5.3 13.85 5.725 13.425Q6.15 13 6.8 13H17.2Q17.85 13 18.275 13.425Q18.7 13.85 18.7 14.5V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenRoundedW100Filled.displayName = 'AmauiIconMaterialSplitscreenRoundedW100Filled';

export default IconMaterialSplitscreenRoundedW100Filled;
