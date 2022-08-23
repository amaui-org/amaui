import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMicSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicSharpW100'
      short_name='Mic'

      {...props}
    >
      <path d="M12 12.7Q11.275 12.7 10.788 12.212Q10.3 11.725 10.3 11V5Q10.3 4.275 10.788 3.787Q11.275 3.3 12 3.3Q12.725 3.3 13.213 3.787Q13.7 4.275 13.7 5V11Q13.7 11.725 13.213 12.212Q12.725 12.7 12 12.7ZM12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8ZM11.65 20.35V16.75Q9.375 16.55 7.838 14.912Q6.3 13.275 6.3 11H7Q7 13.075 8.463 14.537Q9.925 16 12 16Q14.075 16 15.538 14.537Q17 13.075 17 11H17.7Q17.7 13.275 16.163 14.912Q14.625 16.55 12.35 16.75V20.35ZM12 12Q12.425 12 12.713 11.712Q13 11.425 13 11V5Q13 4.575 12.713 4.287Q12.425 4 12 4Q11.575 4 11.288 4.287Q11 4.575 11 5V11Q11 11.425 11.288 11.712Q11.575 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialMicSharpW100.displayName = 'AmauiIconMaterialMicSharpW100';

export default IconMaterialMicSharpW100;
