import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWeatherSnowySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeatherSnowySharpW100Filled'
      short_name='WeatherSnowy'

      {...props}
    >
      <path d="M6.5 18.45q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm3 3q-.275 0-.488-.213-.212-.212-.212-.487t.212-.487q.213-.213.488-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm3-3q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm6 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm-3 3q-.275 0-.487-.213-.213-.212-.213-.487t.213-.487q.212-.213.487-.213t.488.213q.212.212.212.487t-.212.487q-.213.213-.488.213Zm-8-7.1q-2.025 0-3.438-1.412Q2.65 11.525 2.65 9.5q0-1.9 1.288-3.275Q5.225 4.85 7.175 4.65q.725-1.4 1.988-2.2 1.262-.8 2.837-.8 2.125 0 3.638 1.425 1.512 1.425 1.737 3.55 1.875.1 2.925 1.237Q21.35 9 21.35 10.5q0 1.6-1.125 2.725T17.5 14.35Z"/>
    </Icon>
  );
});

IconMaterialWeatherSnowySharpW100Filled.displayName = 'AmauiIconMaterialWeatherSnowySharpW100Filled';

export default IconMaterialWeatherSnowySharpW100Filled;
