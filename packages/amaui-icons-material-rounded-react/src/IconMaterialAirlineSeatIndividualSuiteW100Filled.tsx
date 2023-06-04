import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatIndividualSuiteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatIndividualSuiteW100Filled'

      short_name='AirlineSeatIndividualSuite'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 15.7q-.275 0-.487-.212Q2.3 15.275 2.3 15V8.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V15h8.65V9q0-.275.213-.488.212-.212.487-.212H19q1.125 0 1.913.787.787.788.787 1.913v4q0 .275-.212.488-.213.212-.488.212Zm4-2.85q-.775 0-1.312-.538Q5.15 11.775 5.15 11t.538-1.312Q6.225 9.15 7 9.15t1.312.538q.538.537.538 1.312t-.538 1.312q-.537.538-1.312.538Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatIndividualSuiteW100Filled.displayName = 'AmauiIconMaterialAirlineSeatIndividualSuiteW100Filled';

export default IconMaterialAirlineSeatIndividualSuiteW100Filled;
