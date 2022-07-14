import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAmpStoriesTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmpStoriesTwoTone'
      short_name='AmpStories'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g/><g><g opacity=".3"><rect height="11" width="6" x="9" y="6"/></g><path d="M7,19h10V4H7V19z M9,6h6v11H9V6z"/><rect height="11" width="2" x="3" y="6"/><rect height="11" width="2" x="19" y="6"/></g></g>
    </Icon>
  );
});

export default IconMaterialAmpStoriesTwoTone;
