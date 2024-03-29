import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpdateDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateDisabled'

      short_name='UpdateDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.775 22.625-3-3q-1.05.65-2.25 1.012Q13.325 21 12 21q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 13.875 3 12q0-1.325.362-2.525.363-1.2 1.013-2.25l-3-3L2.8 2.8l18.4 18.4ZM12 19q.9 0 1.738-.212.837-.213 1.587-.613l-9.5-9.5q-.4.75-.612 1.587Q5 11.1 5 12q0 2.925 2.038 4.962Q9.075 19 12 19Zm3-9V8h2.75q-1.025-1.4-2.525-2.2Q13.725 5 12 5q-.9 0-1.737.213-.838.212-1.588.612l-1.45-1.45q1.05-.65 2.25-1.013Q10.675 3 12 3q2.05 0 3.888.875Q17.725 4.75 19 6.35V4h2v6Zm-2 .15-2-2V7h2Zm6.625 6.625-1.45-1.45q.275-.55.462-1.125.188-.575.263-1.2h2.05q-.125 1.05-.462 2-.338.95-.863 1.775Z"/>
    </Icon>
  );
});

IconMaterialUpdateDisabled.displayName = 'AmauiIconMaterialUpdateDisabled';

export default IconMaterialUpdateDisabled;
