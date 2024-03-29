import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTapasFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapasFilled'

      short_name='Tapas'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 23v-9H4q-1.05 0-1.775-.725Q1.5 12.55 1.5 11.5q0-1.05.725-1.775Q2.95 9 4 9h2V8H4q-1.05 0-1.775-.725Q1.5 6.55 1.5 5.5q0-1.05.725-1.775Q2.95 3 4 3h2V1h2v2h2q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q11.05 8 10 8H8v1h2q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q11.05 14 10 14H8v9Zm9 0v-2h2v-7.15q-1.3-.35-2.15-1.4Q14 11.4 14 10V1h8v9q0 1.4-.85 2.45-.85 1.05-2.15 1.4V21h2v2Zm1-17h4V3h-4Z"/>
    </Icon>
  );
});

IconMaterialTapasFilled.displayName = 'AmauiIconMaterialTapasFilled';

export default IconMaterialTapasFilled;
