import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllInclusiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInclusiveW100'

      short_name='AllInclusive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 16.85q-2.025 0-3.438-1.412Q.65 14.025.65 12q0-2.025 1.412-3.438Q3.475 7.15 5.5 7.15q.8 0 1.525.287.725.288 1.325.813l2.25 1.9-.55.45L7.9 8.75q-.5-.425-1.125-.663Q6.15 7.85 5.5 7.85q-1.725 0-2.938 1.212Q1.35 10.275 1.35 12t1.212 2.938Q3.775 16.15 5.5 16.15q.65 0 1.275-.238.625-.237 1.125-.662l7.75-7q.575-.55 1.312-.825.738-.275 1.538-.275 2.025 0 3.438 1.412Q23.35 9.975 23.35 12q0 2.025-1.412 3.438-1.413 1.412-3.438 1.412-.8 0-1.512-.3-.713-.3-1.338-.8l-2.2-1.9.5-.475 2.15 1.875q.5.45 1.125.675.625.225 1.275.225 1.725 0 2.938-1.212Q22.65 13.725 22.65 12t-1.212-2.938Q20.225 7.85 18.5 7.85q-.65 0-1.275.237-.625.238-1.125.663l-7.75 7q-.575.55-1.312.825-.738.275-1.538.275Z"/>
    </Icon>
  );
});

IconMaterialAllInclusiveW100.displayName = 'AmauiIconMaterialAllInclusiveW100';

export default IconMaterialAllInclusiveW100;
