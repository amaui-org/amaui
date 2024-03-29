import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSprint = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sprint'

      short_name='Sprint'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.4 20 4 18.6 13.6 9H11v2H9V7h5.825q.4 0 .775.15t.65.425l3 2.975q.675.675 1.65 1.05.975.375 2.1.4v2q-1.55 0-2.812-.475-1.263-.475-2.238-1.425l-1-1.05-2.2 2.2L17 15.5l-6.55 3.775-1-1.725 4.3-2.475-1.7-1.7ZM3 13v-2h5v2Zm-2-3V8h5v2Zm18.475-2q-.825 0-1.425-.588-.6-.587-.6-1.412t.6-1.412Q18.65 4 19.475 4q.825 0 1.425.588.6.587.6 1.412t-.6 1.412Q20.3 8 19.475 8ZM3 7V5h5v2Z"/>
    </Icon>
  );
});

IconMaterialSprint.displayName = 'AmauiIconMaterialSprint';

export default IconMaterialSprint;
