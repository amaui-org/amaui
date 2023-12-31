import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContractDeleteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContractDeleteW100'

      short_name='ContractDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m765-215-75 75q-4 4-9.5 4.5T670-140q-5-5-5-10t5-10l75-75-75-75q-4-4-4.5-9.5T670-330q5-5 10-5t10 5l75 75 75-75q4-4 9.5-4.5T860-330q5 5 5 10t-5 10l-75 75 75 75q4 4 4.5 9.5T860-140q-5 5-10 5t-10-5l-75-75Zm-525 83q-29 0-48.5-19.5T172-200v-48q0-25 17.5-42.5T232-308h60v-460q0-25 17.5-42.5T352-828h376q25 0 42.5 17.5T788-768v299q-7-1-14-1h-14v-298q0-14-9-23t-23-9H352q-14 0-23 9t-9 23v460h223q-2 7-4 13.5t-4 14.5H232q-14 0-23 9t-9 23v48q0 17 11.5 28.5T240-160h303q2 8 5.5 14.5T555-132H240Zm303-28H200h335-4 12ZM394-632q-6 0-10-4t-4-10q0-6 4-10t10-4h292q6 0 10 4t4 10q0 6-4 10t-10 4H394Zm0 108q-6 0-10-4t-4-10q0-6 4-10t10-4h292q6 0 10 4t4 10q0 6-4 10t-10 4H394Z"/>
    </Icon>
  );
});

IconMaterialContractDeleteW100.displayName = 'AmauiIconMaterialContractDeleteW100';

export default IconMaterialContractDeleteW100;
