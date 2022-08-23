import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMicSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicSharpW100Filled'
      short_name='Mic'

      {...props}
    >
      <path d="M12 12.7Q11.275 12.7 10.788 12.212Q10.3 11.725 10.3 11V5Q10.3 4.275 10.788 3.787Q11.275 3.3 12 3.3Q12.725 3.3 13.213 3.787Q13.7 4.275 13.7 5V11Q13.7 11.725 13.213 12.212Q12.725 12.7 12 12.7ZM11.65 20.35V16.75Q9.375 16.55 7.838 14.912Q6.3 13.275 6.3 11H7Q7 13.075 8.463 14.537Q9.925 16 12 16Q14.075 16 15.538 14.537Q17 13.075 17 11H17.7Q17.7 13.275 16.163 14.912Q14.625 16.55 12.35 16.75V20.35Z"/>
    </Icon>
  );
});

IconMaterialMicSharpW100Filled.displayName = 'AmauiIconMaterialMicSharpW100Filled';

export default IconMaterialMicSharpW100Filled;
