import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSurfingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurfingFilled'

      short_name='Surfing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 23v-2h1q.8 0 1.55-.25T6 20q.7.5 1.45.738.75.237 1.55.237t1.562-.237Q11.325 20.5 12 20q.7.5 1.45.738.75.237 1.55.237t1.562-.237Q17.325 20.5 18 20q.675.5 1.438.75Q20.2 21 21 21h1v2h-1q-.775 0-1.525-.188-.75-.187-1.475-.562-.725.375-1.475.562Q15.775 23 15 23q-.775 0-1.525-.188-.75-.187-1.475-.562-.725.375-1.475.562Q9.775 23 9 23q-.775 0-1.525-.188-.75-.187-1.475-.562-.725.375-1.475.562Q3.775 23 3 23ZM17 5.5q-.825 0-1.412-.588Q15 4.325 15 3.5t.588-1.413Q16.175 1.5 17 1.5t1.413.587Q19 2.675 19 3.5q0 .825-.587 1.412Q17.825 5.5 17 5.5ZM9 19q-.25 0-.488-.038-.237-.037-.462-.112-2.15-1.475-3.6-2.975-1.45-1.5-1.45-2.6 0-.775.6-1.025.6-.25 1.25-.25.725 0 1.675.212.95.213 2.025.613L7.825 8.6l3.125-2.1-2-.375L6.125 8.05 5 6.4 8.5 4l5.55 1.025q.35.05.675.275.325.225.55.625l.875 1.55Q16.8 8.6 17.95 9.3t2.55.7v2q-1.95 0-3.55-.975-1.6-.975-2.525-2.55L12.175 10 16 13v3.85q.4.275.775.575.375.3.725.575-.525.45-1.15.725Q15.725 19 15 19q-.9 0-1.675-.425T12 17.5q-.55.65-1.325 1.075Q9.9 19 9 19Zm5-3.5V14l-3.7-2.9.45 2.65q.675.325 1.675.863 1 .537 1.575.887Z"/>
    </Icon>
  );
});

IconMaterialSurfingFilled.displayName = 'AmauiIconMaterialSurfingFilled';

export default IconMaterialSurfingFilled;
