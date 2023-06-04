import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSupportAgentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SupportAgentW100Filled'

      short_name='SupportAgent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21v-.7h7v-8.2q0-1.45-.55-2.725-.55-1.275-1.5-2.225-.95-.95-2.225-1.5Q13.45 5.1 12 5.1q-1.45 0-2.725.55Q8 6.2 7.05 7.15q-.95.95-1.5 2.225Q5 10.65 5 12.1v6H3.3v-4.725h1V12.1q-.025-1.575.588-2.975.612-1.4 1.662-2.45Q7.6 5.625 9 5.012q1.4-.612 3-.612t3 .6q1.4.6 2.45 1.65Q18.5 7.7 19.1 9.1q.6 1.4.6 3v1.275h1V18.1h-1V21Zm-2.5-6.8q-.275 0-.488-.213-.212-.212-.212-.487t.212-.488q.213-.212.488-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm5 0q-.275 0-.487-.213-.213-.212-.213-.487t.213-.488q.212-.212.487-.212t.488.212q.212.213.212.488t-.212.487q-.213.213-.488.213Zm-7.575-1.725q-.075-1.25.35-2.275t1.163-1.738q.737-.712 1.687-1.1.95-.387 1.925-.387 1.925 0 3.338 1.225Q16.8 9.425 17.1 11.25q-2-.025-3.612-1.075-1.613-1.05-2.438-2.725-.35 1.725-1.45 3.05-1.1 1.325-2.675 1.975Z"/>
    </Icon>
  );
});

IconMaterialSupportAgentW100Filled.displayName = 'AmauiIconMaterialSupportAgentW100Filled';

export default IconMaterialSupportAgentW100Filled;
