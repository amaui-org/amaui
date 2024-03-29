import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistantDirectionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantDirectionFilled'

      short_name='AssistantDirection'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 23q-2.275 0-4.287-.863-2.013-.862-3.5-2.349-1.488-1.488-2.35-3.5Q1 14.275 1 12q0-2.3.863-4.3.862-2 2.35-3.488 1.487-1.487 3.5-2.35Q9.725 1 12 1q2.3 0 4.3.862 2 .863 3.488 2.35Q21.275 5.7 22.138 7.7 23 9.7 23 12q0 2.275-.862 4.288-.863 2.012-2.35 3.5-1.488 1.487-3.488 2.349Q14.3 23 12 23Zm-.625-3.225q.25.25.575.25.325 0 .575-.25l7.2-7.2q.25-.25.25-.6t-.25-.6l-7.2-7.2q-.25-.25-.575-.25-.325 0-.575.25l-7.2 7.2q-.25.25-.25.6t.25.6Zm-1.4-7.8V14q0 .425-.287.7-.288.275-.713.275t-.712-.287q-.288-.288-.288-.713v-3q0-.45.275-.725.275-.275.725-.275h4.15l-.375-.4q-.275-.3-.275-.7 0-.4.3-.7.275-.275.7-.275.425 0 .7.275l2.1 2.1q.275.275.275.7 0 .425-.275.7L14.15 13.8q-.275.275-.675.275t-.7-.3q-.3-.3-.312-.713-.013-.412.287-.712l.375-.375Z"/>
    </Icon>
  );
});

IconMaterialAssistantDirectionFilled.displayName = 'AmauiIconMaterialAssistantDirectionFilled';

export default IconMaterialAssistantDirectionFilled;
