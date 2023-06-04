import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeatPumpBalanceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpBalanceW100Filled'

      short_name='HeatPumpBalance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.8 20.3q-.625 0-1.062-.437Q2.3 19.425 2.3 18.8v-5.75q0-.325.213-.538.212-.212.537-.212h17.9q.325 0 .538.212.212.213.212.538v5.75q0 .625-.437 1.063-.438.437-1.063.437ZM7 17.2q.975 0 1.662-.688.688-.687.688-1.662v-4.4q0-.675.488-1.163Q10.325 8.8 11 8.8q.675 0 1.163.487.487.488.487 1.163v4.4q0 .975.688 1.662.687.688 1.662.688.975 0 1.663-.688.687-.687.687-1.662v-5.4q0-.675.487-1.163Q18.325 7.8 19 7.8h2.775l-1.6 1.6q-.1.1-.1.225t.1.225q.1.1.238.1.137 0 .237-.1l1.875-1.875q.225-.225.225-.537 0-.313-.225-.538L20.65 5.025q-.1-.1-.25-.1t-.25.1q-.1.1-.1.237 0 .138.1.238l1.6 1.6H19q-.975 0-1.662.687-.688.688-.688 1.663v5.4q0 .675-.487 1.162-.488.488-1.163.488t-1.162-.488q-.488-.487-.488-1.162v-4.4q0-.975-.687-1.663Q11.975 8.1 11 8.1q-.975 0-1.662.687-.688.688-.688 1.663v4.4q0 .675-.487 1.162Q7.675 16.5 7 16.5t-1.162-.488q-.488-.487-.488-1.162v-6.4q0-.15-.1-.25T5 8.1q-.15 0-.25.1t-.1.25v6.4q0 .975.688 1.662.687.688 1.662.688Z"/>
    </Icon>
  );
});

IconMaterialHeatPumpBalanceW100Filled.displayName = 'AmauiIconMaterialHeatPumpBalanceW100Filled';

export default IconMaterialHeatPumpBalanceW100Filled;
