import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContractW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractW100'

      short_name='Contract'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-132q-29 0-48.5-19.5T172-200v-48q0-24.75 17.625-42.375T232-308h60v-460q0-24.75 17.625-42.375T352-828h376q24.75 0 42.375 17.625T788-768v568q0 29-19.5 48.5T720-132H240Zm480-28q17 0 28.5-11.5T760-200v-568q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v460h300q24.75 0 42.375 17.625T680-248v48q0 17 11.5 28.5T720-160ZM394-632q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h292q5.95 0 9.975 4.035 4.025 4.035 4.025 10T695.975-636q-4.025 4-9.975 4H394Zm0 108q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h292q5.95 0 9.975 4.035 4.025 4.035 4.025 10T695.975-528q-4.025 4-9.975 4H394ZM240-160h412v-88q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v48q0 17 11.5 28.5T240-160Zm0 0h-40 452-412Z"/>
    </Icon>
  );
});

IconMaterialContractW100.displayName = 'AmauiIconMaterialContractW100';

export default IconMaterialContractW100;
