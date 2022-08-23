import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPauseRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseRoundedFilled'
      short_name='Pause'

      {...props}
    >
      <path d="M15 19Q14.175 19 13.588 18.413Q13 17.825 13 17V7Q13 6.175 13.588 5.588Q14.175 5 15 5H17Q17.825 5 18.413 5.588Q19 6.175 19 7V17Q19 17.825 18.413 18.413Q17.825 19 17 19ZM7 19Q6.175 19 5.588 18.413Q5 17.825 5 17V7Q5 6.175 5.588 5.588Q6.175 5 7 5H9Q9.825 5 10.413 5.588Q11 6.175 11 7V17Q11 17.825 10.413 18.413Q9.825 19 9 19Z"/>
    </Icon>
  );
});

IconMaterialPauseRoundedFilled.displayName = 'AmauiIconMaterialPauseRoundedFilled';

export default IconMaterialPauseRoundedFilled;
