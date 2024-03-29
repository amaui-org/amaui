import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoStoriesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoStoriesFilled'

      short_name='AutoStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19.55q-.275 0-.537-.075-.263-.075-.488-.2-1.025-.625-2.15-.95Q7.7 18 6.5 18q-1.05 0-2.062.275-1.013.275-1.938.775-.525.275-1.012-.025Q1 18.725 1 18.15V6.1q0-.275.138-.525.137-.25.412-.375 1.15-.6 2.4-.9Q5.2 4 6.5 4q1.45 0 2.838.375Q10.725 4.75 12 5.5v12.1q1.275-.8 2.675-1.2 1.4-.4 2.825-.4.9 0 1.763.15.862.15 1.737.45v-12q.375.125.738.262.362.138.712.338.275.125.413.375.137.25.137.525v12.05q0 .575-.487.875-.488.3-1.013.025-.925-.5-1.938-.775Q18.55 18 17.5 18q-1.2 0-2.325.325-1.125.325-2.15.95-.225.125-.487.2-.263.075-.538.075Zm2.825-5.3q-.25.225-.537.087Q14 14.2 14 13.875V5.7q0-.05.15-.35l4-4q.25-.25.55-.125.3.125.3.475v8.575q0 .1-.175.375Z"/>
    </Icon>
  );
});

IconMaterialAutoStoriesFilled.displayName = 'AmauiIconMaterialAutoStoriesFilled';

export default IconMaterialAutoStoriesFilled;
