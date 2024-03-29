import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElderlyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElderlyFilled'

      short_name='Elderly'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 5.5q-.825 0-1.412-.588Q11.5 4.325 11.5 3.5t.588-1.413Q12.675 1.5 13.5 1.5t1.413.587q.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588ZM8 23l-1.6-1.2L9 18.325V13q0-.8.137-1.725.138-.925.363-1.675l-1.5.85V14H6V9.3l5.4-3.075q.2-.125.425-.175Q12.05 6 12.3 6q.6 0 1.1.3.5.3.75.825l.775 1.675q.475 1 1.438 1.6.962.6 2.137.6.625 0 1.062.438.438.437.438 1.062V23h-1V12.5q0-.2-.15-.35-.15-.15-.35-.15-.2 0-.35.15-.15.15-.15.35v1h-1v-.7q-1.1-.275-2-.925-.9-.65-1.5-1.575-.275.725-.4 1.662-.125.938-.075 1.738L15 16.5V23h-2v-5l-1.775-2.55L11 19Z"/>
    </Icon>
  );
});

IconMaterialElderlyFilled.displayName = 'AmauiIconMaterialElderlyFilled';

export default IconMaterialElderlyFilled;
