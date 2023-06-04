import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPropane = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Propane'

      short_name='Propane'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M17,8H7c-2.21,0-4,1.79-4,4s1.79,4,4,4h10c2.21,0,4-1.79,4-4S19.21,8,17,8z" opacity=".3"/><path d="M17,6h-1V5c0-1.1-0.9-2-2-2h-4C8.9,3,8,3.9,8,5v1H7c-3.31,0-6,2.69-6,6s2.69,6,6,6v3h2v-3h6v3h2v-3c3.31,0,6-2.69,6-6 S20.31,6,17,6z M10,5h4v1h-4V5z M17,16H7c-2.21,0-4-1.79-4-4s1.79-4,4-4h10c2.21,0,4,1.79,4,4S19.21,16,17,16z"/></g></g>
    </Icon>
  );
});

IconMaterialPropane.displayName = 'AmauiIconMaterialPropane';

export default IconMaterialPropane;
