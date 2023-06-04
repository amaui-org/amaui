import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialParaglidingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParaglidingW100Filled'

      short_name='Paragliding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.6q-.65 0-1.125-.475T10.4 15q0-.65.475-1.125T12 13.4q.65 0 1.125.475T13.6 15q0 .65-.475 1.125T12 16.6Zm-2.35 6.75v-3.275q-2.025-.55-2.937-2.013Q5.8 16.6 5.675 14.65h.7q.15 2.55 1.575 3.775T12 19.65q2.625 0 4.05-1.225 1.425-1.225 1.575-3.775h.7q-.125 1.95-1.037 3.412-.913 1.463-2.938 2.013v3.275Zm-4.275-10.5-2.2-5.4q-.425.175-.737.325-.313.15-.438.15t-.237-.1q-.113-.1-.113-.25V4.25q0-1.425 2.925-2.513Q7.5.65 12 .65t7.425 1.087Q22.35 2.825 22.35 4.25v3.325q0 .15-.112.25-.113.1-.238.1-.125 0-.438-.15-.312-.15-.737-.325l-2.2 5.4H17.55l-1.525-6.7Q14.95 6 13.95 5.925q-1-.075-1.95-.075t-1.95.075q-1 .075-2.075.225l-1.525 6.7Zm.5-.6L7.2 6.275q-.975.2-1.7.387-.725.188-1.65.563Zm12.25 0 2.025-5.025q-.95-.35-1.662-.55-.713-.2-1.688-.4Z"/>
    </Icon>
  );
});

IconMaterialParaglidingW100Filled.displayName = 'AmauiIconMaterialParaglidingW100Filled';

export default IconMaterialParaglidingW100Filled;
