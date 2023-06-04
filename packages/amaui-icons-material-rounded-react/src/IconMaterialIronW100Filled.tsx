import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIronW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronW100Filled'

      short_name='Iron'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.375 16.7q-.325 0-.538-.213-.212-.212-.212-.537V14.9q0-1.275.912-2.188.913-.912 2.188-.912h8.6v-1.15q0-.675-.487-1.162Q14.35 9 13.675 9H11.1q-.575 0-1.038.363-.462.362-.587.937-.05.15-.15.25-.1.1-.225.1-.15 0-.25-.113-.1-.112-.075-.237.125-.85.787-1.425.663-.575 1.538-.575h2.575q.975 0 1.663.687.687.688.687 1.663v3.95q.675 0 1.163-.487.487-.488.487-1.163v-3.3q0-.975.688-1.663.687-.687 1.662-.687.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1q-.675 0-1.162.488-.488.487-.488 1.162v3.3q0 .975-.687 1.662-.688.688-1.663.688v.65q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialIronW100Filled.displayName = 'AmauiIconMaterialIronW100Filled';

export default IconMaterialIronW100Filled;
