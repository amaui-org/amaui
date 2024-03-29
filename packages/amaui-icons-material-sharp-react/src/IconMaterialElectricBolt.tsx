import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricBolt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricBolt'

      short_name='ElectricBolt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 21.8q-.225.225-.537.212-.313-.012-.538-.237-.2-.2-.225-.5-.025-.3.15-.525L13 14l-8.1-.775q-.65-.05-.863-.675-.212-.625.288-1.05L14.7 2.2q.225-.225.538-.213.312.013.537.238.2.2.225.5.025.3-.15.525L11 10l8.1.775q.65.05.862.675.213.625-.287 1.05Z"/>
    </Icon>
  );
});

IconMaterialElectricBolt.displayName = 'AmauiIconMaterialElectricBolt';

export default IconMaterialElectricBolt;
