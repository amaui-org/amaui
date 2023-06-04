import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoStoriesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoStoriesW100'

      short_name='AutoStories'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.95 18.35q-1.225-.8-2.6-1.225Q7.975 16.7 6.5 16.7q-1.025 0-2.137.262-1.113.263-2.063.688V6.3q.9-.45 2.025-.725Q5.45 5.3 6.5 5.3q1.475 0 2.85.475T12 7v10.5q1.25-.8 2.662-1.15Q16.075 16 17.5 16q.8 0 1.788.175.987.175 1.712.45V5.95q.15.05.363.15.212.1.337.2v11.35q-.95-.425-2.062-.688-1.113-.262-2.138-.262-1.5 0-2.925.387-1.425.388-2.625 1.263ZM14 15V6.8l5-5v8.7Zm-2.7 2.175V7.4q-1.125-.65-2.325-1.025Q7.775 6 6.5 6q-.925 0-1.887.2-.963.2-1.613.55v9.875q.725-.225 1.612-.425Q5.5 16 6.5 16q1.475 0 2.75.363 1.275.362 2.05.812Zm0 0V7.4Z"/>
    </Icon>
  );
});

IconMaterialAutoStoriesW100.displayName = 'AmauiIconMaterialAutoStoriesW100';

export default IconMaterialAutoStoriesW100;
