import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoStoriesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoStoriesW100Filled'

      short_name='AutoStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.95 18.35q-1.225-.8-2.6-1.225Q7.975 16.7 6.5 16.7q-1.025 0-2.137.262-1.113.263-2.063.688V6.3q.9-.45 2.025-.725Q5.45 5.3 6.5 5.3q1.475 0 2.85.475T12 7v10.5q1.25-.8 2.662-1.15Q16.075 16 17.5 16q.8 0 1.788.175.987.175 1.712.45V5.95q.15.05.363.15.212.1.337.2v11.35q-.95-.425-2.062-.688-1.113-.262-2.138-.262-1.5 0-2.925.387-1.425.388-2.625 1.263ZM14 15V6.8l5-5v8.7Z"/>
    </Icon>
  );
});

IconMaterialAutoStoriesW100Filled.displayName = 'AmauiIconMaterialAutoStoriesW100Filled';

export default IconMaterialAutoStoriesW100Filled;
