import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSynagogueW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SynagogueW100Filled'

      short_name='Synagogue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.65 8.65v-1.3q0-.9.55-1.45.55-.55 1.45-.55.9 0 1.45.55.55.55.55 1.45v1.3Zm-15.3 0v-1.3q0-.9.55-1.45.55-.55 1.45-.55.9 0 1.45.55.55.55.55 1.45v1.3Zm0 11V9.35h4v10.3Zm4.7 0V9.05L12 4.775l4.95 4.275v10.6H13.6V14.4h-3.2v5.25Zm10.6 0V9.35h4v10.3ZM12 11q.425 0 .713-.288Q13 10.425 13 10t-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10t.288.712Q11.575 11 12 11Z"/>
    </Icon>
  );
});

IconMaterialSynagogueW100Filled.displayName = 'AmauiIconMaterialSynagogueW100Filled';

export default IconMaterialSynagogueW100Filled;
