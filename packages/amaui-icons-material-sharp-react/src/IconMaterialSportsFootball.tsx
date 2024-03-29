import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsFootball = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsFootball'

      short_name='SportsFootball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12Zm-2.95 6.95-4-4q-.075.95-.037 1.975.037 1.025.187 1.825.575.175 1.738.225 1.162.05 2.112-.025Zm2.4-.4q1.475-.325 2.65-.925 1.175-.6 2.05-1.475.85-.85 1.45-2.013.6-1.162.95-2.637L12.5 5.45q-1.425.35-2.575.962Q8.775 7.025 7.9 7.9T6.413 9.938Q5.8 11.1 5.45 12.55ZM9.9 15.5l-1.4-1.4 5.6-5.6 1.4 1.4Zm9.05-6.4q.1-.975.063-2.025-.038-1.05-.213-1.825-.575-.2-1.738-.25-1.162-.05-2.112.05ZM7.75 21q-1.425 0-2.6-.212-1.175-.213-1.45-.488-.275-.3-.487-1.5Q3 17.6 3 16.15q0-2.975.9-5.513Q4.8 8.1 6.45 6.45 8.1 4.8 10.675 3.9 13.25 3 16.25 3q1.45 0 2.613.212 1.162.213 1.437.488.275.3.488 1.5Q21 6.4 21 7.9q0 2.925-.9 5.463-.9 2.537-2.55 4.187-1.625 1.625-4.2 2.537-2.575.913-5.6.913Z"/>
    </Icon>
  );
});

IconMaterialSportsFootball.displayName = 'AmauiIconMaterialSportsFootball';

export default IconMaterialSportsFootball;
