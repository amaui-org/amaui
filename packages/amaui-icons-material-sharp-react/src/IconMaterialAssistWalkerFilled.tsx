import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistWalkerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistWalkerFilled'

      short_name='AssistWalker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.5 7.5q-.825 0-1.412-.588Q10.5 6.325 10.5 5.5t.588-1.413Q11.675 3.5 12.5 3.5t1.413.587q.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588ZM8 21v-5.25l-.775-.7.175 1.35-3.675 4.725L2.15 19.9l3.15-4.05-2.075-4.1 4.2-4.15q.3-.3.663-.45Q8.45 7 8.825 7q.6 0 .95.225t.475.35l2 1.975q.675.675 1.65 1.063.975.387 2.1.387h2.975l.8 7.7q.325.2.525.537.2.338.2.763 0 .625-.438 1.062-.437.438-1.062.438t-1.075-.438q-.45-.437-.45-1.062 0-.425.2-.763.2-.337.55-.537l-.125-1.2h-3.25L14.5 21H13l.85-8.275q-1.425-.375-2.15-.987-.725-.613-1.45-1.338l-2.375 2.35L10 14.875V21Zm7-5h2.95l-.35-3.5h-2.225Z"/>
    </Icon>
  );
});

IconMaterialAssistWalkerFilled.displayName = 'AmauiIconMaterialAssistWalkerFilled';

export default IconMaterialAssistWalkerFilled;
