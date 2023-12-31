import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContractEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractEditW100Filled'

      short_name='ContractEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M774-264 651.297-141.297Q646-136 640.783-134q-5.218 2-10.783 2h-40q-12.75 0-21.375-8.625T560-162v-39q0-5.565 2-10.783 2-5.217 7.297-10.514L692-345l82 81Zm42-43-82-81 31-30q9-8 21-8.5t21 8.5l40 40q9 9 8.5 21.5T846-335l-30 28ZM394-632q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h292q5.95 0 9.975 4.035 4.025 4.035 4.025 10T695.975-636q-4.025 4-9.975 4H394Zm0 108q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h292q5.95 0 9.975 4.035 4.025 4.035 4.025 10T695.975-528q-4.025 4-9.975 4H394ZM240-132q-29 0-48.5-19.5T172-200v-48q0-24.75 17.625-42.375T232-308h60v-460q0-24.75 17.625-42.375T352-828h376q24.75 0 42.375 17.625T788-768v186l-28 28v-214q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v460h194l-36 36q-8 8-13 19.278-5 11.278-5 23.722v97H240Z"/>
    </Icon>
  );
});

IconMaterialContractEditW100Filled.displayName = 'AmauiIconMaterialContractEditW100Filled';

export default IconMaterialContractEditW100Filled;
