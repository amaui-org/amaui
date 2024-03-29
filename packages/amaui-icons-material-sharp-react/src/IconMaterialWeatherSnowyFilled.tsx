import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeatherSnowyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeatherSnowyFilled'

      short_name='WeatherSnowy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 19q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.888.363q.362.362.362.887t-.362.887Q7.025 19 6.5 19Zm3 3q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887Q10.025 22 9.5 22Zm3-3q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.887.363q.363.362.363.887t-.363.887Q13.025 19 12.5 19Zm6 0q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.888.363q.362.362.362.887t-.362.887Q19.025 19 18.5 19Zm-3 3q-.525 0-.887-.363-.363-.362-.363-.887t.363-.887q.362-.363.887-.363t.888.363q.362.362.362.887t-.362.887Q16.025 22 15.5 22Zm-8-7q-2.275 0-3.887-1.613Q2 11.775 2 9.5q0-2.075 1.375-3.625 1.375-1.55 3.4-1.825.8-1.425 2.188-2.238Q10.35 1 12 1q2.25 0 3.912 1.438 1.663 1.437 2.013 3.587 1.725.15 2.9 1.425Q22 8.725 22 10.5q0 1.875-1.312 3.188Q19.375 15 17.5 15Z"/>
    </Icon>
  );
});

IconMaterialWeatherSnowyFilled.displayName = 'AmauiIconMaterialWeatherSnowyFilled';

export default IconMaterialWeatherSnowyFilled;
