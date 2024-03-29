import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTapas = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tapas'

      short_name='Tapas'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 23v-9H4q-1.05 0-1.775-.725Q1.5 12.55 1.5 11.5q0-1.05.725-1.775Q2.95 9 4 9h2V8H4q-1.05 0-1.775-.725Q1.5 6.55 1.5 5.5q0-1.05.725-1.775Q2.95 3 4 3h2V1h2v2h2q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q11.05 8 10 8H8v1h2q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q11.05 14 10 14H8v9ZM4 12h6q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q10.2 11 10 11H4q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15Zm0-6h6q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35Q10.2 5 10 5H4q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35Q3.8 6 4 6Zm11 17v-2h2v-7.15q-1.3-.35-2.15-1.4Q14 11.4 14 10V1h8v9q0 1.4-.85 2.45-.85 1.05-2.15 1.4V21h2v2Zm3-11q.825 0 1.413-.588Q20 10.825 20 10V8h-4v2q0 .825.587 1.412Q17.175 12 18 12Zm-2-6h4V3h-4ZM3.5 12v-1 1Zm0-6V5v1ZM18 8Z"/>
    </Icon>
  );
});

IconMaterialTapas.displayName = 'AmauiIconMaterialTapas';

export default IconMaterialTapas;
