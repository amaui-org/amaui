import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllInclusiveRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInclusiveRoundedW100Filled'
      short_name='AllInclusive'

      {...props}
    >
      <path d="M5.5 16.85Q3.475 16.85 2.062 15.438Q0.65 14.025 0.65 12Q0.65 9.975 2.062 8.562Q3.475 7.15 5.5 7.15Q6.3 7.15 7.025 7.437Q7.75 7.725 8.35 8.25L10.6 10.15L10.05 10.6L7.9 8.75Q7.4 8.325 6.775 8.087Q6.15 7.85 5.5 7.85Q3.775 7.85 2.562 9.062Q1.35 10.275 1.35 12Q1.35 13.725 2.562 14.938Q3.775 16.15 5.5 16.15Q6.15 16.15 6.775 15.912Q7.4 15.675 7.9 15.25L15.65 8.25Q16.225 7.7 16.962 7.425Q17.7 7.15 18.5 7.15Q20.525 7.15 21.938 8.562Q23.35 9.975 23.35 12Q23.35 14.025 21.938 15.438Q20.525 16.85 18.5 16.85Q17.7 16.85 16.988 16.55Q16.275 16.25 15.65 15.75L13.45 13.85L13.95 13.375L16.1 15.25Q16.6 15.7 17.225 15.925Q17.85 16.15 18.5 16.15Q20.225 16.15 21.438 14.938Q22.65 13.725 22.65 12Q22.65 10.275 21.438 9.062Q20.225 7.85 18.5 7.85Q17.85 7.85 17.225 8.087Q16.6 8.325 16.1 8.75L8.35 15.75Q7.775 16.3 7.038 16.575Q6.3 16.85 5.5 16.85Z"/>
    </Icon>
  );
});

IconMaterialAllInclusiveRoundedW100Filled.displayName = 'AmauiIconMaterialAllInclusiveRoundedW100Filled';

export default IconMaterialAllInclusiveRoundedW100Filled;
