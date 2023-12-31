import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContractEditW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractEditW100'

      short_name='ContractEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-132q-29 0-48.5-19.5T172-200v-48q0-25 17.5-42.5T232-308h60v-460q0-25 17.5-42.5T352-828h376q25 0 42.5 17.5T788-768v242q-7 0-14 .5t-14 2.5v-245q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v460h194l-28 28H232q-14 0-23 9t-9 23v48q0 17 11.5 28.5T240-160h220v28H240Zm348-28h42l154-154 20 20-153 153q-5 5-10 7t-11 2h-40q-13 0-21.5-8.5T560-162v-39q0-6 2-11t7-10l153-153 20 19-154 154v42Zm216-134-82-81 43-43q9-8 21.5-8t20.5 8l40 40q8 8 8 20.5t-8 21.5l-43 42ZM394-632q-6 0-10-4t-4-10q0-6 4-10t10-4h292q6 0 10 4t4 10q0 6-4 10t-10 4H394Zm0 108q-6 0-10-4t-4-10q0-6 4-10t10-4h292q6 0 10 4t4 10q0 6-4 10t-10 4H394Zm66 364H200h260Z"/>
    </Icon>
  );
});

IconMaterialContractEditW100.displayName = 'AmauiIconMaterialContractEditW100';

export default IconMaterialContractEditW100;
