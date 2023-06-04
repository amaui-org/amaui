import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsGymnasticsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsGymnasticsW100Filled'

      short_name='SportsGymnastics'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.25 7.6q-.65 0-1.125-.475T4.65 6q0-.65.475-1.125T6.25 4.4q.65 0 1.125.475T7.85 6q0 .65-.475 1.125T6.25 7.6ZM13 21.35q-.15 0-.262-.112-.113-.113-.113-.263l-.1-9.3L7.2 10.35H1.25q-.15 0-.25-.1T.9 10q0-.15.1-.25t.25-.1H7.2l7.625-5.35q.125-.075.237-.063.113.013.213.138.1.125.088.262-.013.138-.138.238l-4.575 3.25 3.925 1.125 6.85-4.275q.1-.05.213-.037.112.012.212.112.1.1.088.237-.013.138-.138.213l-7.6 5.725L13.4 21q-.025.15-.125.25t-.275.1Z"/>
    </Icon>
  );
});

IconMaterialSportsGymnasticsW100Filled.displayName = 'AmauiIconMaterialSportsGymnasticsW100Filled';

export default IconMaterialSportsGymnasticsW100Filled;
