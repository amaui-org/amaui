import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWhatshotSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotSharp'
      short_name='Whatshot'

      {...props}
    >
      <path d="M12 22Q10.35 22 8.812 21.488Q7.275 20.975 6 20L7.45 18.55Q8.5 19.275 9.65 19.637Q10.8 20 12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12H2Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.887 2.787Q17.7 3.575 19.062 4.938Q20.425 6.3 21.212 8.113Q22 9.925 22 12Q22 14.05 21.212 15.875Q20.425 17.7 19.062 19.062Q17.7 20.425 15.887 21.212Q14.075 22 12 22ZM3.7 18.2Q3.275 17.775 3 17.5Q2.725 17.225 2.3 16.8L7.95 11.15L10.95 13.65L14.6 10H12V8H18V14H16V11.4L11.05 16.35L8.05 13.85ZM11 12Q11 12 11 12Q11 12 11 12Q11 12 11 12Q11 12 11 12Q11 12 11 12Q11 12 11 12Q11 12 11 12Q11 12 11 12Q11 12 11 12Q11 12 11 12Z"/>
    </Icon>
  );
});

IconMaterialWhatshotSharp.displayName = 'AmauiIconMaterialWhatshotSharp';

export default IconMaterialWhatshotSharp;
