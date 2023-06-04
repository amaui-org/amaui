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
      <path d="M17.65 8.65v-1.3q0-.9.55-1.45.55-.55 1.45-.55.9 0 1.45.55.55.55.55 1.45v1.3Zm-15.3 0v-1.3q0-.9.55-1.45.55-.55 1.45-.55.9 0 1.45.55.55.55.55 1.45v1.3Zm1.5 11q-.625 0-1.062-.438-.438-.437-.438-1.062v-8.8h4v10.3Zm3.2 0V9.725q0-.325.138-.625.137-.3.387-.5l3.45-2.975q.2-.2.45-.287.25-.088.525-.088t.525.088q.25.087.45.287l3.45 2.975q.25.2.387.5.138.3.138.625v9.925H13.6V16q0-.725-.437-1.163Q12.725 14.4 12 14.4q-.725 0-1.162.437-.438.438-.438 1.163v3.65Zm10.6 0V9.35h4v8.8q0 .625-.437 1.062-.438.438-1.063.438ZM12 11q.425 0 .713-.288Q13 10.425 13 10t-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10t.288.712Q11.575 11 12 11Z"/>
    </Icon>
  );
});

IconMaterialSynagogueW100Filled.displayName = 'AmauiIconMaterialSynagogueW100Filled';

export default IconMaterialSynagogueW100Filled;
