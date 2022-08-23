import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatOverlineRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatOverlineRoundedW100Filled'
      short_name='FormatOverline'

      {...props}
    >
      <path d="M6.25 4.35Q6.1 4.35 6 4.25Q5.9 4.15 5.9 4Q5.9 3.85 6 3.75Q6.1 3.65 6.25 3.65H17.75Q17.9 3.65 18 3.75Q18.1 3.85 18.1 4Q18.1 4.15 18 4.25Q17.9 4.35 17.75 4.35ZM12 20.1Q9.45 20.1 7.675 18.325Q5.9 16.55 5.9 14Q5.9 11.45 7.675 9.675Q9.45 7.9 12 7.9Q14.55 7.9 16.325 9.675Q18.1 11.45 18.1 14Q18.1 16.55 16.325 18.325Q14.55 20.1 12 20.1ZM12 19.4Q14.275 19.4 15.838 17.837Q17.4 16.275 17.4 14Q17.4 11.725 15.838 10.162Q14.275 8.6 12 8.6Q9.725 8.6 8.163 10.162Q6.6 11.725 6.6 14Q6.6 16.275 8.163 17.837Q9.725 19.4 12 19.4Z"/>
    </Icon>
  );
});

IconMaterialFormatOverlineRoundedW100Filled.displayName = 'AmauiIconMaterialFormatOverlineRoundedW100Filled';

export default IconMaterialFormatOverlineRoundedW100Filled;
