import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTwoWheelerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TwoWheelerW100Filled'

      short_name='TwoWheeler'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18.35q-1.4 0-2.375-.975Q.65 16.4.65 15t.975-2.375Q2.6 11.65 4 11.65h.95L3.1 10.1H.65v-.7H3.9l3.05 1.8 4.15-1.55h4.4l-2.6-3.3h-2.25v-.7h2.6l1.8 2.3 2.85-.9V8.4h-2.5l2.9 3.7q.375-.25.813-.35.437-.1.887-.1 1.4 0 2.375.975.975.975.975 2.375t-.975 2.375q-.975.975-2.375.975t-2.375-.975Q16.65 16.4 16.65 15q0-.725.288-1.35.287-.625.812-1.1l-1.4-1.8-3.65 5.6h-2.45l-2.9-2.5V15q0 1.4-.975 2.375Q5.4 18.35 4 18.35Zm0-.7q1.125 0 1.888-.763.762-.762.762-1.887t-.762-1.887Q5.125 12.35 4 12.35t-1.888.763Q1.35 13.875 1.35 15t.762 1.887q.763.763 1.888.763Zm16 0q1.125 0 1.888-.763.762-.762.762-1.887t-.762-1.887q-.763-.763-1.888-.763t-1.887.763q-.763.762-.763 1.887t.763 1.887q.762.763 1.887.763Z"/>
    </Icon>
  );
});

IconMaterialTwoWheelerW100Filled.displayName = 'AmauiIconMaterialTwoWheelerW100Filled';

export default IconMaterialTwoWheelerW100Filled;
